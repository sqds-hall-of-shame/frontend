import { isMobile } from "@/utils/isMobile";

interface Props {
  children?: React.ReactNode;
}

export const MobileBrowser: React.FC<Props> = ({ children }: Props) =>
  isMobile() ? children : <></>;

export default MobileBrowser;
