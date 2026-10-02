import { Moon, Cloud, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import "../style/AppearanceToggle.css"
import { useTheme } from "./ThemeContext";

export default function AppearanceToggle() {
  const { theme , setTheme } = useTheme(localStorage.getItem("theme"));

  return (
    <div className="toggle-container">
      <div className={`toggle-${theme}`}>
        <div className={`light-mode ${theme === "light" ? 'light-active' : ''}`} onClick={() => setTheme("light")} aria-label="Light Mode Toggle">
          <Sun />
        </div>
        <div className={`cloudy-mode ${theme === "cloudy" ? 'cloudy-active' : ''}`} onClick={() => setTheme("cloudy")} aria-label="Cloudy Mode Toggle">
          <Cloud />
        </div>
        <div className={`dark-mode ${theme === "dark" ? 'dark-active' : ''}`} onClick={() => setTheme("dark")} aria-label="Dark Mode Toggle">
          <Moon />
        </div>
      </div>
    </div>
  );
}