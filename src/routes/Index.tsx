import { HOS } from "@/components/icons/HOS";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";

export const Index: React.FC = () => {
  return (
    <>
      <DesktopBrowser>
        <div className="flex items-center justify-between mx-16 my-8">
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch />
          </div>

          <div className="flex items-center">
            <HOS className="size-12 mr-3 rounded-lg" />

            <p className="text-4xl animate-gradient">
              <strong>sqd's hall of shame</strong>
            </p>
          </div>
        </div>

        <div className="absolute-center">
          <Spinner />
        </div>
      </DesktopBrowser>

      <MobileBrowser>
        <div className="flex items-center justify-between mx-8 my-8">
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch />
          </div>

          <HOS className="size-12 mr-3 rounded-lg" />
        </div>

        <div className="absolute-center">
          <Spinner />
        </div>
      </MobileBrowser>
    </>
  );
};

export default Index;
