import { ToggleLeftIcon, ToggleRightIcon } from "lucide-react";
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
        <h4 className="light-mode" onClick={() => switchModes("light")} aria-label="Light Mode Toggle">
          Light
        </h4>
        <h4 className="dark-mode" onClick={() => switchModes("dark")} aria-label="Dark Mode Toggle">
          Dark
        </h4>
      </div>
    </div>
  );
}