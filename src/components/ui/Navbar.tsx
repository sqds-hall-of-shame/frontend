import { HOS } from "@/components/icons/HOS";
import { NavButton } from "@/components/ui/NavButton";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui//MobileBrowser";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { ScrollbarToggle } from "@/components/ui/ScrollbarToggle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/16/solid";

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

interface Props {
  onRandom?: () => never | void;
  onTitleClick?: () => never | void;
}

export const Navbar: React.FC<Props> = (props: Props) => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [currentTitleEasterEgg, setCurrentTitleEasterEgg] = useState(
    titleEasterEggs[Math.floor(Math.random() * titleEasterEggs.length)],
  );

  return (
    <>
      <DesktopBrowser>
        <div
          className="mb-[150px]"
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
          <div className="flex justify-center items-center fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-black bg-opacity-[75%] dark:bg-white dark:bg-opacity-[3%] duration-150 rounded-3xl border border-[#383838] backdrop-filter backdrop-blur-[8px]">
            <nav className="flex items-center text-center justify-between w-full my-8 ml-24">
              <div className="flex items-center">
                {window.location.pathname === "/random" ? (
                  <div className="flex items-center mr-3">
                    <NavButton className="mr-1" onClick={props.onRandom}>
                      <ArrowPathIcon className="text-white size-4" />
                    </NavButton>

                    <Link to="/">
                      <NavButton>
                        <XMarkIcon className="text-white size-4" />
                      </NavButton>
                    </Link>
                  </div>
                ) : (
                  <Link to="/random">
                    <NavButton className="mr-3">Random</NavButton>
                  </Link>
                )}

                <ThemeSwitch />
                <MusicToggle />
                <ScrollbarToggle />
              </div>

              <Link to="/" onClick={props.onTitleClick}>
                <div className="flex items-center">
                  <HOS className="size-12 mr-3 rounded-lg" />

                  <div className="flex items-center text-center">
                    <div className="relative mr-4 text-center">
                      <p className="text-4xl blur-[10px] select-none text-gradient">
                        <strong>sqd's hall of shame</strong>
                      </p>

                      <p className="absolute inset-0 z-10 text-4xl select-none text-gradient">
                        <strong>sqd's hall of shame</strong>
                      </p>
                    </div>

                    <div className="relative mr-4 mt-1">
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
              </Link>
            </nav>
          </div>
        </div>
      </DesktopBrowser>

      <MobileBrowser>
        <div className="mb-[120px]">
          <div className="flex justify-center items-center fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-black bg-opacity-[75%] dark:bg-white dark:bg-opacity-[3%] duration-150 rounded-3xl border border-[#383838] backdrop-filter backdrop-blur-[8px]">
            <nav className="flex items-center text-center justify-between w-full m-4">
              <div className="flex items-center">
                {window.location.pathname === "/random" ? (
                  <div className="flex items-center mr-3">
                    <NavButton className="mr-1" onClick={props.onRandom}>
                      <ArrowPathIcon className="text-white size-4" />
                    </NavButton>

                    <Link to="/">
                      <NavButton>
                        <XMarkIcon className="text-white size-4" />
                      </NavButton>
                    </Link>
                  </div>
                ) : (
                  <Link to="/random">
                    <NavButton className="mr-3">Random</NavButton>
                  </Link>
                )}

                <ThemeSwitch />
                <MusicToggle />
              </div>

              <Link to="/" onClick={props.onTitleClick}>
                <HOS className="size-12 mr-3 rounded-lg" />
              </Link>
            </nav>
          </div>
        </div>
      </MobileBrowser>
    </>
  );
};

export default Navbar;
