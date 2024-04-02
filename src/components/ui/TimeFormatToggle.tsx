import { ClockIcon } from "@heroicons/react/16/solid";
import { isMobile } from "@/utils/isMobile";

export const TimeFormatToggle: React.FC = () => (
  <button
    onClick={() => {
      if (localStorage.getItem("time-format") === "24") {
        localStorage.setItem("time-format", "12");
        window.location.reload();
        return;
      }

      localStorage.setItem("time-format", "24");
      window.location.reload();
    }}
    className="cursor-pointer"
  >
    <div
      className={`duration-150 ${isMobile() ? "text-black" : "hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20"} p-2 rounded-lg`}
    >
      <ClockIcon className="size-7 text-white" />
    </div>
  </button>
);

export default TimeFormatToggle;
