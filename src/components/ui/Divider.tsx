interface Props {
  className?: string;
}

export const Divider: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`border border-neutral-500 dark:border-[#464646] w-full ${className || ""}`}
    />
  );
};

export default Divider;
