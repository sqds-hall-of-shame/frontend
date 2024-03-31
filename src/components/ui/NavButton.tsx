interface Props {
  className?: string;
  onClick?: (() => void) | (() => never);
  children?: React.ReactNode;
  type?: "button" | "submit";
}

export const NavButton: React.FC<Props> = (props: Props) => (
  <button
    type={props.type || "button"}
    onClick={props.onClick}
    className={`py-2 px-4 rounded-[10px] select-none transition border-2 border-transparent text-white bg-white bg-opacity-[7%] hover:bg-black hover:bg-opacity-[25%] dark:bg-opacity-[10%] dark:hover:bg-white dark:hover:bg-opacity-[20%] dark:border-2 dark:border-transparent ${props.className || ""}`}
  >
    {props.children}
  </button>
);

export default NavButton;
