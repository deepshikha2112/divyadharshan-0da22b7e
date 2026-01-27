import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type Language = "en" | "hi";
export type TextSize = "small" | "medium" | "large";

interface NotificationSettings {
  enabled: boolean;
  morningEnabled: boolean;
  afternoonEnabled: boolean;
  nightEnabled: boolean;
  soundEnabled: boolean;
}

interface SettingsState {
  // Theme
  themeMode: ThemeMode;
  
  // Language
  language: Language;
  
  // Notifications (granular)
  notifications: NotificationSettings;
  
  // Audio
  backgroundMusic: boolean;
  volume: number;
  
  // Text Size
  textSize: TextSize;
}

interface SettingsContextType {
  settings: SettingsState;
  setThemeMode: (mode: ThemeMode) => void;
  setLanguage: (lang: Language) => void;
  setNotificationSetting: <K extends keyof NotificationSettings>(key: K, value: NotificationSettings[K]) => void;
  setBackgroundMusic: (enabled: boolean) => void;
  setVolume: (volume: number) => void;
  setTextSize: (size: TextSize) => void;
}

const defaultSettings: SettingsState = {
  themeMode: "light",
  language: "hi",
  notifications: {
    enabled: true,
    morningEnabled: true,
    afternoonEnabled: true,
    nightEnabled: true,
    soundEnabled: true,
  },
  backgroundMusic: false,
  volume: 70,
  textSize: "medium",
};

const STORAGE_KEY = "divya_darshan_settings";

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<SettingsState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migration: handle old format
        if (parsed.dailyReminders !== undefined || parsed.spiritualNotifications !== undefined) {
          return {
            ...defaultSettings,
            ...parsed,
            language: parsed.language === "english" ? "en" : parsed.language === "hindi" ? "hi" : parsed.language || "hi",
            notifications: {
              enabled: parsed.dailyReminders ?? true,
              morningEnabled: true,
              afternoonEnabled: true,
              nightEnabled: true,
              soundEnabled: parsed.spiritualNotifications ?? true,
            }
          };
        }
        return { ...defaultSettings, ...parsed };
      }
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
    return defaultSettings;
  });

  // Persist settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error("Failed to save settings:", e);
    }
  }, [settings]);

  // Apply theme mode to document
  useEffect(() => {
    const root = document.documentElement;
    if (settings.themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [settings.themeMode]);

  // Apply text size to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    root.classList.add(`text-size-${settings.textSize}`);
  }, [settings.textSize]);

  const setThemeMode = (mode: ThemeMode) => {
    setSettings((prev) => ({ ...prev, themeMode: mode }));
  };

  const setLanguage = (lang: Language) => {
    setSettings((prev) => ({ ...prev, language: lang }));
  };

  const setNotificationSetting = <K extends keyof NotificationSettings>(
    key: K, 
    value: NotificationSettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      }
    }));
  };

  const setBackgroundMusic = (enabled: boolean) => {
    setSettings((prev) => ({ ...prev, backgroundMusic: enabled }));
  };

  const setVolume = (volume: number) => {
    setSettings((prev) => ({ ...prev, volume }));
  };

  const setTextSize = (size: TextSize) => {
    setSettings((prev) => ({ ...prev, textSize: size }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setThemeMode,
        setLanguage,
        setNotificationSetting,
        setBackgroundMusic,
        setVolume,
        setTextSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
