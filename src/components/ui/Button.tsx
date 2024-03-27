import { useEffect, useState } from "react";

interface Props {
  className?: string;
  onClick?: (() => void) | (() => never);
  children?: React.ReactNode;
  type?: "button" | "submit";
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  outline?: boolean;
  ghost?: boolean;
}

export const Button: React.FC<Props> = (props: Props) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (
      (!props.primary &&
        !props.secondary &&
        !props.destructive &&
        !props.outline &&
        !props.ghost) ||
      props.primary
    )
      setClassName(
        "text-white bg-neutral-600 hover:bg-neutral-800 border-2 border-transparent dark:bg-[#343434] dark:hover:bg-[#505050] dark:border-2 dark:border-transparent",
      );

    if (props.secondary)
      setClassName(
        "text-white bg-neutral-800 hover:bg-neutral-600 border-2 border-transparent dark:text-black dark:bg-neutral-200 dark:hover:bg-neutral-400 dark:border-2 dark:border-transparent",
      );

    if (props.destructive)
      setClassName(
        "text-[#FFE2E2] hover:text-[#FF7373] bg-[#F34949] hover:bg-[#AF3232] border-2 border-transparent dark:text-[#FFE2E2] dark:hover:text-[#FF7373] dark:bg-[#F34949] dark:hover:bg-[#AF3232] dark:border-2 dark:border-transparent",
      );

    if (props.outline)
      setClassName(
        "text-white bg-neutral-600 border-2 border-neutral-700 hover:border-neutral-900 dark:bg-[#343434] dark:border-2 dark:border-[#3e3e3e] dark:hover:border-[#555555]",
      );

    if (props.ghost)
      setClassName(
        "text-black bg-white border-2 border-neutral-600 hover:bg-neutral-600 hover:text-white dark:bg-[#131313] dark:border-2 dark:border-[#2B2B2B] dark:hover:border-[#666666] dark:hover:bg-[#666666]",
      );
  }, [
    props.primary,
    props.secondary,
    props.destructive,
    props.outline,
    props.ghost,
  ]);

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`p-2 rounded-[10px] select-none transition ${className} ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
