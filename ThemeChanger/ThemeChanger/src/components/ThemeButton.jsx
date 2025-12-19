import React from "react";
import usetheme from "../contexts/theme";

export default function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = usetheme();

  const onchangeBtn = (e) => {
    const isDark = e.currentTarget.checked;
    isDark ? darkTheme() : lightTheme();
  };

  return (
    <div className="theme-toggle">
      <label>
        <input
          type="checkbox"
          checked={themeMode === "dark"}
          onChange={onchangeBtn}
        />{" "}
        Toggle Theme
      </label>
    </div>
  );
}
