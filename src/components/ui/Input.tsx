interface Props {
  className?: string;
  value?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  valueBinder?: ((newValue: string) => void) | ((newValue: string) => never);
  required?: boolean;
}

export const Input: React.FC<Props> = (props: Props) => {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      className={`focus:outline-none p-2 duration-150 rounded-[10px] bg-white border-2 border-blue-600 focus:border-blue-400 dark:border-none dark:bg-[#434343] dark:focus:ring-blue-600 dark:focus:ring-2 ${props.className || ""}`}
      required={props.required}
      onInput={(event) => {
        if (props.valueBinder) props.valueBinder(event.currentTarget.value);
      }}
    />
  );
};

export default Input;
