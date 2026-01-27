import { useSettings } from "@/contexts/SettingsContext";
import { useDailyNotifications } from "@/hooks/useDailyNotifications";
import NotificationPopup from "@/components/NotificationPopup";

const NotificationManager = () => {
  const { settings } = useSettings();
  const { notifications } = settings;

  const { notification, dismissNotification } = useDailyNotifications({
    enabled: notifications.enabled,
    morningEnabled: notifications.morningEnabled,
    afternoonEnabled: notifications.afternoonEnabled,
    nightEnabled: notifications.nightEnabled,
    soundEnabled: notifications.soundEnabled,
  });

  return (
    <NotificationPopup
      isVisible={notification.isVisible}
      content={notification.content}
      slot={notification.slot}
      onDismiss={dismissNotification}
    />
  );
};

export default NotificationManager;
