import { HOS } from "@/components/icons/HOS";
import { Button } from "@/components/ui/Button";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui//MobileBrowser";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { MusicToggle } from "@/components/ui/MusicToggle";

export const Navbar: React.FC = () => {
  return (
    <>
      <DesktopBrowser>
        <nav className="flex items-center justify-between mx-16 my-8">
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch />
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
    </>
  );
};

export default Navbar;
