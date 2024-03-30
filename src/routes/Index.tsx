import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";
import { Spinner } from "@/components/ui/Spinner";

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
        <div className="mx-3">
          <p className="text-black">thing</p>
        </div>
      </MobileBrowser>
    </>
  );
};

export default Index;
