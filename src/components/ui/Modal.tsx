import { XMarkIcon } from "@heroicons/react/24/outline";
import { HOS } from "@/components/icons/HOS";
import { Divider } from "@/components/ui/Divider";
import { useState } from "react";

interface Props {
  zIndex?: number;
  title?: string;
  onClose: (() => void) | (() => never);
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  return (
    <div
      className={`absolute-center blur-none bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 duration-150 transition-opacity ${isClosing ? "opacity-0" : ""} ${props.className || ""}`}
      style={{ zIndex: props.zIndex || 5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {props.icon || <HOS className="mr-2 size-5 rounded-lg" />}
          <p>{props.title || "Modal"}</p>
        </div>

        <button
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => props.onClose(), 150);
          }}
          className="cursor-pointer"
        >
          <XMarkIcon className="size-5 dark:text-white hover:text-neutral-500 duration-100" />
        </button>
      </div>

      <Divider className="mb-2" />

      {props.children}
    </div>
  );
};

export default Modal;
