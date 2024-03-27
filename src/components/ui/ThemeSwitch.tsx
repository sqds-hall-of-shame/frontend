import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  className?: string;
}

export const ThemeSwitch: React.FC<Props> = ({ className }: Props) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  setInterval(() => setCurrentTheme(localStorage.getItem("theme") || "dark"));

  return (
    <button
      onClick={() =>
        localStorage.setItem(
          "theme",
          currentTheme === "dark" ? "light" : "dark",
        )
      }
      className="cursor-pointer"
    >
      {currentTheme === "dark" ? (
        <div className="duration-150 hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20 p-1 rounded-lg">
          <SunIcon
            className={`size-9 text-black dark:text-white ${className}`}
          />
        </div>
      ) : (
        <div className="duration-150 hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20 p-1 rounded-lg">
          <MoonIcon
            className={`size-9 text-black dark:text-white ${className}`}
          />
        </div>
      )}
    </button>
  );
};

export default ThemeSwitch;
