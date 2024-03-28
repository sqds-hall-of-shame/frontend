import { Spinner } from "@/components/ui/Spinner";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";

export const Index: React.FC = () => {
  return (
    <>
      <Navbar />

      <DesktopBrowser>
        <div className="absolute-center">
          <Spinner />
        </div>
      </DesktopBrowser>

      <MobileBrowser>
        <div className="absolute-center">
          <Spinner />
        </div>
      </MobileBrowser>
    </>
  );
};

export default Index;
