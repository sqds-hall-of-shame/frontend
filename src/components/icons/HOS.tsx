interface Props {
  className?: string;
}

export const HOS: React.FC<Props> = ({ className }: Props) => (
  <img src="/logo.png" className={className} />
);

export default HOS;
