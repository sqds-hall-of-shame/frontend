import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export const FreeRobuxObbyRobloxRobuxFreeRoboxApp: React.FC = () => (
  <>
    <div className="p-2">
      <Link to="/">
        <button className="flex justify-center items-center text-center p-1.5 px-4 rounded-[10px] select-none transition text-white dark:bg-[#343434] dark:hover:bg-[#494949] border-2 border-transparent bg-neutral-600 hover:bg-neutral-700">
          <ArrowLeftIcon className="w-6 h-6 mr-1" />
          Back
        </button>
      </Link>
    </div>
    <div className="absolute-center">
      <img
        src="/free-robux-obby-roblox-robux-free-robox-app.png"
        className="rounded-lg"
      />
    </div>
  </>
);

export default FreeRobuxObbyRobloxRobuxFreeRoboxApp;
