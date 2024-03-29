import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

export const ScrollbarToggle: React.FC = () => (
  <button
    onClick={() => {
      if (localStorage.getItem("scrollbar-hidden") === "true") {
        localStorage.removeItem("scrollbar-hidden");
        return;
      }

      localStorage.setItem("scrollbar-hidden", "true");
    }}
    className="cursor-pointer"
  >
    <div className="duration-150 hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20 p-2 rounded-lg">
      <ChevronUpDownIcon className="size-7 text-white" />
    </div>
  </button>
);

export default ScrollbarToggle;
