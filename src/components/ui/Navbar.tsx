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
];

export const Navbar: React.FC = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [currentTitleEasterEgg, setCurrentTitleEasterEgg] = useState(
    titleEasterEggs[Math.floor(Math.random() * titleEasterEggs.length)],
  );

  return (
    <>
      <DesktopBrowser>
        <nav className="flex items-center justify-between ml-20 mr-12 my-8">
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
                  className={`w-10 blur-[10px] mt-0.5 text-[#eb5be8] text-lg select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <strong>{currentTitleEasterEgg}</strong>
                </p>

                <p
                  className={`absolute inset-0 z-10 w-10 mt-0.5 text-[#eb5be8] text-lg select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <strong>{currentTitleEasterEgg}</strong>
                </p>
              </div>
            </div>
          </div>
        </nav>
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
