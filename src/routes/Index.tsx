import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";
import { Spinner } from "@/components/ui/Spinner";

export const Index: React.FC = () => {
  return (
    <>
      <Navbar />

      <DesktopBrowser>
        <div className="mx-12 flex items-center">
          <div className="bg-black bg-opacity-[50%] dark:bg-white dark:bg-opacity-[3%] w-[30%] p-3 pl-8 mr-5 rounded-2xl">
            <p className="text-3xl text-white mb-1">
              <span style={{ fontWeight: 465 }}>Statistics</span>
            </p>

            <p className="text-white">
              <span style={{ fontWeight: 465 }}>Last message:</span> 10 minutes
              ago
            </p>
            <p className="text-white">
              <span style={{ fontWeight: 465 }}>Last site update:</span> 10
              minutes ago
            </p>
            <p className="text-white">
              <span style={{ fontWeight: 465 }}>Ping:</span> 234ms
            </p>
          </div>

          <div className="bg-black bg-opacity-[50%] dark:bg-white dark:bg-opacity-[3%] w-full p-3 pl-8 pr-8 rounded-2xl flex justify-between">
            <div className="flex flex-col">
              <p className="text-3xl text-white mb-1">
                <span style={{ fontWeight: 465 }}>Changelogs</span>
              </p>

              <p className="text-white">frontend | feat: body padding</p>
              <p className="text-white">frontend | feat: wider button</p>
              <p className="text-white">frontend | feat: mobile optimization</p>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-white">backend | Third commit (pt.2)</p>
              <p className="text-white">
                frontend | feat: better navbar design
              </p>
              <p className="text-white">frontend | fix: icon drag</p>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-white">backend | Third commit (pt.1)</p>
              <p className="text-white">backend | Second commit (pt.2)</p>
              <p className="text-white">backend | Second commit (pt.1)</p>
            </div>
          </div>
        </div>

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
