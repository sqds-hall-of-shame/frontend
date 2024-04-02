import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { isMobile } from "@/utils/isMobile";
import { api } from "@/utils/api";

export const ThemeToggle: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light",
  );

  setInterval(
    () => setCurrentTheme(localStorage.getItem("theme") || "light"),
    30,
  );

  return (
    <button
      onClick={() => {
        localStorage.setItem(
          "theme",
          currentTheme === "dark" ? "light" : "dark",
        );

        api.science(localStorage.getItem("theme") + "_mode");
      }}
      className="cursor-pointer"
    >
      <div
        className={`duration-150 ${isMobile() ? "text-black" : "hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20"} p-2 rounded-lg`}
      >
        {currentTheme === "dark" ? (
          <SunIcon className="size-7 text-white" />
        ) : (
          <MoonIcon className="size-7 text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
