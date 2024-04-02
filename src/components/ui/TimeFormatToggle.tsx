import { ClockIcon } from "@heroicons/react/16/solid";
import { isMobile } from "@/utils/isMobile";

interface Props {
  page?: number;
}

export const TimeFormatToggle: React.FC<Props> = (props: Props) => (
  <button
    onClick={() => {
      if (localStorage.getItem("time-format") === "24") {
        localStorage.setItem("time-format", "12");
        if (window.location.pathname === "/" && props.page) {
          window.location.href = "/?page=" + props.page;
          return;
        }

        window.location.reload();
        return;
      }

      localStorage.setItem("time-format", "24");

      if (window.location.pathname === "/" && props.page) {
        window.location.href = "/?page=" + props.page;
        return;
      }

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
