import { HOS } from "@/components/icons/HOS";
import { Button } from "@/components/ui/Button";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui//MobileBrowser";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { useState } from "react";

const titleEasterEggs = [
  ":3",
  "UwU",
  "uwu",
  "-w-",
  "OwO",
  "owo",
  "-.-",
  "O.O",
  "o.o",
  "//_//",
  "//.//",
  "@.@",
  "@-@",
  "^w^",
  "^-^",
  "~w~",
  "^.^",
  ":)",
  ":D",
  ":P",
  ":(",
  ";-;",
  ":o",
  "(^_^)",
  "(v_v)",
  "<333",
  "T_T",
  "TwT",
  "xD",
  "x_x",
  "^_^",
  "<3",
  "//w//",
  ":^)",
  ":|",
  ":/",
  ";)",
  "=w=",
  ":]",
  "ʕ•ᴥ•ʔ",
  "o.O",
  "U.U",
  "u.u",
  "xd",
  "(*^▽^*)",
  "=)",
  ":>",
  ":c",
  "D:",
  ":O",
  "o-o",
  "o_O",
  "o_o",
  "O_O",
  "O-O",
  "˶ᵔᵕᵔ˶",
];

export const Navbar: React.FC = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [currentTitleEasterEgg, setCurrentTitleEasterEgg] = useState(
    titleEasterEggs[Math.floor(Math.random() * titleEasterEggs.length)],
  );

  return (
    <>
      <DesktopBrowser>
        <div className="mb-[120px]">
          <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#111111] duration-150">
            <nav className="flex items-center text-center justify-between ml-32 mr-12 my-8">
              <div className="flex items-center">
                <Button className="mr-3">Random</Button>

                <ThemeSwitch />
                <MusicToggle />
              </div>

              <div className="flex items-center">
                <HOS className="size-12 mr-3 rounded-lg" />

                <div className="flex items-center">
                  <div
                    className="relative mr-8"
                    onMouseEnter={() => {
                      setIsTitleHovered(!isTitleHovered);
                      setCurrentTitleEasterEgg(
                        titleEasterEggs[
                          Math.floor(Math.random() * titleEasterEggs.length)
                        ],
                      );
                    }}
                    onMouseLeave={() => setIsTitleHovered(false)}
                  >
                    <p className="text-4xl blur-[10px] select-none animate-gradient">
                      <strong>sqd's hall of shame</strong>
                    </p>

                    <p className="absolute inset-0 z-10 text-4xl select-none animate-gradient">
                      <strong>sqd's hall of shame</strong>
                    </p>
                  </div>

                  <div className="relative">
                    <p
                      className={`w-20 blur-[10px] text-[#970e94] dark:text-[#eb5be8] text-2xl select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
                    >
                      <strong>{currentTitleEasterEgg}</strong>
                    </p>

                    <p
                      className={`absolute inset-0 z-20 w-18 text-[#970e94] dark:text-[#eb5be8] text-lg select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
                    >
                      <strong>{currentTitleEasterEgg}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </DesktopBrowser>

      <MobileBrowser>
        <nav className="flex items-center justify-between mx-8 my-8">
          <div className="flex items-center">
            <Button className="mr-3">Random</Button>

            <ThemeSwitch />
            <MusicToggle />
          </div>

          <HOS className="size-12 mr-3 rounded-lg" />
        </nav>
      </MobileBrowser>
    </>
  );
};

export default Navbar;
