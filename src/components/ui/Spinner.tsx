interface Props {
  className?: string;
}

export const Spinner: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`border-x-4 border-y-4 rounded-full border-x-fuchsia-500 border-y-blue-500 p-4 animate-spin-faster ${className || ""}`}
    />
  );
};

export default Spinner;
