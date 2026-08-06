import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./style/AppearanceToggle.css"

export default function AppearanceToggle() {
  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const switchModes = (mode) => {
    if (mode === "light") {
      setIsDark(false);
    } else if (mode === "dark") {
      setIsDark(true);
    }
  }

  return (
    <div>
      <div className={isDark ? "toggle-dark" : "toggle-light"}>
        <div className="light-mode" onClick={() => switchModes("light")} aria-label="Light Mode Toggle">
          <Sun />
        </div>
        <div className="dark-mode" onClick={() => switchModes("dark")} aria-label="Dark Mode Toggle">
          <Moon />
        </div>
      </div>
    </div>
  );
}