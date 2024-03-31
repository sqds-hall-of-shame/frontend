interface Props {
  className?: string;
  onClick?: (() => void) | (() => never);
  children?: React.ReactNode;
  type?: "button" | "submit";
}

export const Button: React.FC<Props> = (props: Props) => (
  <button
    type={props.type || "button"}
    onClick={props.onClick}
    className={`p-1.5 px-4 rounded-[10px] select-none transition text-white dark:bg-[#343434] dark:hover:bg-[#494949] border-2 border-transparent bg-neutral-600 hover:bg-neutral-700 ${props.className || ""}`}
  >
    {props.children}
  </button>
);

export default Button;
