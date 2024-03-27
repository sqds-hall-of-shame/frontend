import { XMarkIcon } from "@heroicons/react/24/outline";
import { Gemini } from "@/components/icons/Gemini";
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
      className={`absolute-center bg-neutral-200 dark:bg-neutral-800 rounded-lg p-3 duration-150 transition-opacity ${isClosing ? "opacity-0" : ""} ${props.className || ""}`}
      style={{ zIndex: props.zIndex || 5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="inline-flex items-center text-black">
          {props.icon || <Gemini className="mr-2 size-5" />}
          <p>{props.title || "Modal"}</p>
        </div>

        <button
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => props.onClose(), 150);
          }}
          className="cursor-pointer"
        >
          <XMarkIcon className="size-5 text-black hover:text-neutral-500 duration-100" />
        </button>
      </div>

      <Divider className="mb-2" />

      {props.children}
    </div>
  );
};

export default Modal;
