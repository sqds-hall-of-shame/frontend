import { isMobile } from "@/utils/isMobile";

interface Props {
  children?: React.ReactNode;
}

export const DesktopBrowser: React.FC<Props> = ({ children }: Props) =>
  !isMobile() && children;

export default DesktopBrowser;
