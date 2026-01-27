import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type Language = "english" | "hindi";
export type TextSize = "small" | "medium" | "large";

interface SettingsState {
  // Theme
  themeMode: ThemeMode;
  
  // Language
  language: Language;
  
  // Notifications
  dailyReminders: boolean;
  spiritualNotifications: boolean;
  
  // Audio
  backgroundMusic: boolean;
  volume: number;
  
  // Text Size
  textSize: TextSize;
}

interface SettingsContextType extends SettingsState {
  setThemeMode: (mode: ThemeMode) => void;
  setLanguage: (lang: Language) => void;
  setDailyReminders: (enabled: boolean) => void;
  setSpiritualNotifications: (enabled: boolean) => void;
  setBackgroundMusic: (enabled: boolean) => void;
  setVolume: (volume: number) => void;
  setTextSize: (size: TextSize) => void;
}

const defaultSettings: SettingsState = {
  themeMode: "light",
  language: "hindi",
  dailyReminders: true,
  spiritualNotifications: true,
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
        return { ...defaultSettings, ...JSON.parse(stored) };
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

  const setDailyReminders = (enabled: boolean) => {
    setSettings((prev) => ({ ...prev, dailyReminders: enabled }));
  };

  const setSpiritualNotifications = (enabled: boolean) => {
    setSettings((prev) => ({ ...prev, spiritualNotifications: enabled }));
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
        ...settings,
        setThemeMode,
        setLanguage,
        setDailyReminders,
        setSpiritualNotifications,
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
