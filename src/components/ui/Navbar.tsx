import { HOS } from "@/components/icons/HOS";
import { Button } from "@/components/ui/Button";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui//MobileBrowser";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { VirusMoment } from "@/components/modals/VirusMoment";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { isMobile } from "@/utils/isMobile";
import { useState } from "react";

interface Props {
  onVirusMoment?: () => never | void;
  onVirusMomentClose?: () => never | void;
}

export const Navbar: React.FC<Props> = (props: Props) => {
  const [virusMoment, setVirusMoment] = useState(false);
  let presses = 0;

  return (
    <>
      <DesktopBrowser>
        <nav
          className={`flex items-center justify-between mx-16 my-8 ${virusMoment ? "blur-sm" : ""}`}
        >
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch
              onClick={() => {
                if (
                  props.onVirusMoment &&
                  props.onVirusMomentClose &&
                  !isMobile()
                ) {
                  presses++;
                  setTimeout(() => presses--, 2000);

                  if (presses >= 10) {
                    props.onVirusMoment();
                    setVirusMoment(true);
                    presses = 1;
                  }
                }
              }}
            />

            <MusicToggle />
          </div>

          <div className="flex items-center">
            <HOS className="size-12 mr-3 rounded-lg" />

            <div className="relative">
              <p className="text-4xl animate-gradient blur-[10px]">
                <strong>sqd's hall of shame</strong>
              </p>

              <p className="absolute inset-0 z-10 text-4xl animate-gradient">
                <strong>sqd's hall of shame</strong>
              </p>
            </div>
          </div>
        </nav>
      </DesktopBrowser>

      <MobileBrowser>
        <nav className="flex items-center justify-between mx-8 my-8">
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch />
          </div>

          <HOS className="size-12 mr-3 rounded-lg" />
        </nav>
      </MobileBrowser>

      {virusMoment ? (
        <VirusMoment
          onClose={() => {
            props.onVirusMomentClose!();
            setVirusMoment(false);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
