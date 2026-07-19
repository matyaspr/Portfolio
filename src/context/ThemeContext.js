import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "theme";
const storageCache = new Map();

function getCachedTheme() {
  if (!storageCache.has(STORAGE_KEY)) {
    try {
      storageCache.set(STORAGE_KEY, localStorage.getItem(STORAGE_KEY));
    } catch {
      storageCache.set(STORAGE_KEY, null);
    }
  }
  return storageCache.get(STORAGE_KEY);
}

function setCachedTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
    storageCache.set(STORAGE_KEY, value);
  } catch {}
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getCachedTheme() || "dark");

  useEffect(() => {
    document.documentElement.className = theme;
    setCachedTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
