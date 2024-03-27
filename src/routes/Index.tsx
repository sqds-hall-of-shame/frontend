import { Spinner } from "@/components/ui/Spinner";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";
import { useState } from "react";

export const Index: React.FC = () => {
  const [virusMoment, setVirusMoment] = useState(false);

  return (
    <>
      <Navbar
        onVirusMoment={() => setVirusMoment(true)}
        onVirusMomentClose={() => setVirusMoment(false)}
      />

      <div className={virusMoment ? "blur-sm" : ""}>
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
      </div>
    </>
  );
};

export default Index;
