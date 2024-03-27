interface Props {
  className?: string;
}

export const Spinner: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`border-r-4 border-l-4 border-t-4 border-b-4 rounded-full border-r-[#2674f0] border-l-[#f21b22] border-t-[#33d12e] border-b-[#f2f222] p-4 animate-spin-faster ${className || ""}`}
    />
  );
};

export default Spinner;
