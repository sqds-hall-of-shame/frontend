import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { HOS } from "@/components/icons/HOS";
import { NavButton } from "@/components/ui/NavButton";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui//MobileBrowser";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { TimeFormatToggle } from "@/components/ui/TimeFormatToggle";
import { api } from "@/utils/api";

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
  onNavClick?: () => never | void;
  page?: number;
}

export const Navbar: React.FC<Props> = (props: Props) => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [currentNavEasterEgg, setCurrentNavEasterEgg] = useState(
    titleEasterEggs[Math.floor(Math.random() * titleEasterEggs.length)],
  );

  return (
    <>
      <DesktopBrowser>
        <div
          className="mb-[150px]"
          onMouseEnter={() => {
            api.science("hovered_on_nav");
            setIsNavHovered(!isNavHovered);
            setCurrentNavEasterEgg(
              titleEasterEggs[
                Math.floor(Math.random() * titleEasterEggs.length)
              ],
            );
          }}
          onMouseLeave={() => setIsNavHovered(false)}
        >
          <div className="flex justify-center items-center fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-black bg-opacity-[75%] dark:bg-white dark:bg-opacity-[3%] duration-150 rounded-3xl border border-[#383838] backdrop-filter backdrop-blur-[8px]">
            <nav className="flex items-center text-center justify-between w-full my-8 ml-24">
              <div className="flex items-center">
                {window.location.pathname === "/random" ? (
                  <div className="flex items-center mr-3">
                    <NavButton
                      className="mr-1"
                      onClick={() => {
                        api.science("clicked_random");
                        props.onRandom && props.onRandom();
                      }}
                    >
                      <ArrowPathIcon className="text-white size-4" />
                    </NavButton>

                    <Link to="/">
                      <NavButton>
                        <XMarkIcon className="text-white size-4" />
                      </NavButton>
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/random"
                    onClick={() => api.science("clicked_random")}
                  >
                    <NavButton className="mr-3">Random</NavButton>
                  </Link>
                )}

                <ThemeToggle />
                <MusicToggle />
                <TimeFormatToggle page={props.page} />
              </div>

              <Link to="/" onClick={props.onNavClick}>
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
                        className={`w-20 blur-[10px] text-[#eb5be8] text-2xl select-none transition-opacity duration-150 ${isNavHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        <strong>{currentNavEasterEgg}</strong>
                      </p>

                      <p
                        className={`absolute inset-0 z-10 w-20 text-[#eb5be8] text-lg select-none transition-opacity duration-150 ${isNavHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        <strong>{currentNavEasterEgg}</strong>
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

                <ThemeToggle />
                <MusicToggle />
                <TimeFormatToggle page={props.page} />
              </div>

              <Link to="/" onClick={props.onNavClick}>
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
