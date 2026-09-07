import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./style/AppearanceToggle.css"
import { useTheme } from "./ThemeContext";

export default function AppearanceToggle() {
  const { isDark, setTheme } = useTheme();

  return (
    <div>
      <div className={isDark ? "toggle-dark" : "toggle-light"}>
        <div className="light-mode" onClick={() => setTheme("light")} aria-label="Light Mode Toggle">
          <Sun />
        </div>
        <div className="dark-mode" onClick={() => setTheme("dark")} aria-label="Dark Mode Toggle">
          <Moon />
        </div>
      </div>
    </div>
  );
}