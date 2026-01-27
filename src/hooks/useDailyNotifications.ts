import { useState, useEffect, useCallback } from 'react';
import { 
  NotificationContent, 
  NotificationTimeSlot,
  getNotificationsForSlot 
} from '@/data/dailyNotifications';

interface NotificationState {
  isVisible: boolean;
  content: NotificationContent | null;
  slot: NotificationTimeSlot | null;
}

interface ShownNotifications {
  date: string;
  morning: boolean;
  afternoon: boolean;
  night: boolean;
  morningId?: string;
  afternoonId?: string;
  nightId?: string;
}

const STORAGE_KEY = 'divya-dharshan-shown-notifications';

const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

const getShownNotifications = (): ShownNotifications => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Reset if it's a new day
      if (parsed.date !== getTodayDate()) {
        return {
          date: getTodayDate(),
          morning: false,
          afternoon: false,
          night: false
        };
      }
      return parsed;
    }
  } catch (e) {
    console.error('Error reading notification state:', e);
  }
  return {
    date: getTodayDate(),
    morning: false,
    afternoon: false,
    night: false
  };
};

const saveShownNotifications = (state: ShownNotifications) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving notification state:', e);
  }
};

const getCurrentTimeSlot = (): NotificationTimeSlot | null => {
  const hour = new Date().getHours();
  
  // Morning: 6-8 AM
  if (hour >= 6 && hour < 8) {
    return 'morning';
  }
  // Afternoon: 1-3 PM (13-15)
  if (hour >= 13 && hour < 15) {
    return 'afternoon';
  }
  // Night: 8-10 PM (20-22)
  if (hour >= 20 && hour < 22) {
    return 'night';
  }
  
  return null;
};

const getRandomNotification = (
  slot: NotificationTimeSlot, 
  excludeId?: string
): NotificationContent => {
  const notifications = getNotificationsForSlot(slot);
  const filtered = excludeId 
    ? notifications.filter(n => n.id !== excludeId)
    : notifications;
  
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex] || notifications[0];
};

interface UseDailyNotificationsProps {
  enabled: boolean;
  morningEnabled: boolean;
  afternoonEnabled: boolean;
  nightEnabled: boolean;
  soundEnabled: boolean;
}

export const useDailyNotifications = ({
  enabled,
  morningEnabled,
  afternoonEnabled,
  nightEnabled,
  soundEnabled
}: UseDailyNotificationsProps) => {
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    content: null,
    slot: null
  });

  const isSlotEnabled = useCallback((slot: NotificationTimeSlot): boolean => {
    if (!enabled) return false;
    switch (slot) {
      case 'morning': return morningEnabled;
      case 'afternoon': return afternoonEnabled;
      case 'night': return nightEnabled;
    }
  }, [enabled, morningEnabled, afternoonEnabled, nightEnabled]);

  const checkAndShowNotification = useCallback(() => {
    if (!enabled) return;

    const currentSlot = getCurrentTimeSlot();
    if (!currentSlot) return;

    if (!isSlotEnabled(currentSlot)) return;

    const shownState = getShownNotifications();
    
    // Check if already shown for this slot today
    if (shownState[currentSlot]) return;

    // Get a random notification different from yesterday's
    const lastShownId = shownState[`${currentSlot}Id` as keyof ShownNotifications] as string | undefined;
    const content = getRandomNotification(currentSlot, lastShownId);

    // Play sound if enabled
    if (soundEnabled) {
      try {
        // Use a subtle notification sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2Onp+fm5eKdWZpfYyTkIh7bmJlcX2EhH1zbGVpcHd8fHdybGpuc3h6d3JubG5xdHV0cW9tbW9xc3NycG5ubm9wcXFwb25ub29wcHBvbm5ub29wcG9ubm5ub29vb25ubm5ubm9vb25ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbQ==');
        audio.volume = 0.3;
        audio.play().catch(() => {});
      } catch (e) {
        // Silent fail for audio
      }
    }

    // Show notification
    setNotification({
      isVisible: true,
      content,
      slot: currentSlot
    });

    // Mark as shown
    const newState: ShownNotifications = {
      ...shownState,
      date: getTodayDate(),
      [currentSlot]: true,
      [`${currentSlot}Id`]: content.id
    };
    saveShownNotifications(newState);
  }, [enabled, isSlotEnabled, soundEnabled]);

  const dismissNotification = useCallback(() => {
    setNotification({
      isVisible: false,
      content: null,
      slot: null
    });
  }, []);

  // Check on mount and every minute
  useEffect(() => {
    // Initial check with a small delay to let app load
    const initialTimeout = setTimeout(() => {
      checkAndShowNotification();
    }, 2000);

    // Check every minute
    const interval = setInterval(() => {
      checkAndShowNotification();
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [checkAndShowNotification]);

  // For testing - manually trigger a notification
  const triggerTestNotification = useCallback((slot: NotificationTimeSlot) => {
    const content = getRandomNotification(slot);
    setNotification({
      isVisible: true,
      content,
      slot
    });
  }, []);

  return {
    notification,
    dismissNotification,
    triggerTestNotification
  };
};
