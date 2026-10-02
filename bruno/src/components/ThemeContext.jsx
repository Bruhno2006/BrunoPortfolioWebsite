import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const colourThemes = ["light", "cloudy", "dark"]

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && colourThemes.includes(savedTheme)) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    root = document.documentElement;

    colourThemes.forEach((t) => {
      root.classList.remove(t);
      document.body.classList.remove(t);
    });

    root.classList.add(theme);
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme)
  }, [theme]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "theme" && colourThemes.includes(e.newValue)) {
        setThemeState(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const setTheme = (newTheme) => {
    if (colourThemes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  };

  const cycleTheme = () => {
    setThemeState((prevTheme) => {
      const currentIndex = colourThemes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % colourThemes.length;
      return colourThemes[nextIndex];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, themes: colourThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}