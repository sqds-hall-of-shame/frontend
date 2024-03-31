import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export const FreeRobuxObbyRobloxRobuxFreeRoboxApp: React.FC = () => (
  <>
    <div className="p-2">
      <Link to="/">
        <Button className="flex justify-center items-center text-center">
          <ArrowLeftIcon className="w-6 h-6 mr-1" />
          Back
        </Button>
      </Link>
    </div>
    <div className="h-screen flex justify-center items-center">
      <img
        src="/free-robux-obby-roblox-robux-free-robox-app.png"
        className="rounded-lg"
      />
    </div>
  </>
);

export default FreeRobuxObbyRobloxRobuxFreeRoboxApp;
