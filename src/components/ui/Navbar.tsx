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
        <div className="mb-[150px]">
          <div className="flex justify-center items-center fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-white bg-opacity-[3%] duration-150 rounded-3xl">
            <nav className="flex items-center text-center justify-between w-full my-8 ml-24">
              <div className="flex items-center">
                <Button className="mr-3">Random</Button>

                <ThemeSwitch />
                <MusicToggle />
              </div>

              <div className="flex items-center">
                <HOS className="size-12 mr-3 rounded-lg" />

                <div className="flex items-center text-center">
                  <div
                    className="relative mr-4 text-center"
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

                  <div className="relative mr-4">
                    <p
                      className={`w-20 blur-[10px] text-[#eb5be8] text-2xl select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
                    >
                      <strong>{currentTitleEasterEgg}</strong>
                    </p>

                    <p
                      className={`absolute inset-0 z-10 w-20 text-[#eb5be8] text-lg select-none transition-opacity duration-150 ${isTitleHovered ? "opacity-100" : "opacity-0"}`}
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
