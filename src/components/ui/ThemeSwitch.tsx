import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  onClick?: () => never | void;
}

export const ThemeSwitch: React.FC<Props> = (props: Props) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  setInterval(() => setCurrentTheme(localStorage.getItem("theme") || "dark"));

  return (
    <button
      onClick={() => {
        localStorage.setItem(
          "theme",
          currentTheme === "dark" ? "light" : "dark",
        );

        if (props.onClick) {
          props.onClick();
        }
      }}
      className="cursor-pointer"
    >
      <div className="duration-150 hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20 p-1 rounded-lg">
        {currentTheme === "dark" ? (
          <SunIcon className="size-9 text-black dark:text-white" />
        ) : (
          <MoonIcon className="size-9 text-black dark:text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
