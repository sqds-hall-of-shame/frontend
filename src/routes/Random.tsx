import { useEffect, useState } from "react";
import { FreeRobuxObbyRobloxRobuxFreeRoboxApp } from "@/components/ui/FreeRobuxObbyRobloxRobuxFreeRoboxApp";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";
import { Spinner } from "@/components/ui/Spinner";
import { Statistics } from "@/components/ui/Statistics";
import { api, Message } from "@/utils/api";
import { formatUnixTime } from "@/utils/formatUnixTime";
import { isMobile } from "@/utils/isMobile";
import { isURL } from "@/utils/isURL";

enum LoadState {
  LOADING = "Loading",
  ERROR = "Error",
  DONE = "Done",
}

export const Random: React.FC = () => {
  const [loadState, setLoadState] = useState(LoadState.LOADING);
  const [randomMessage, setRandomMessage] = useState<Message>({
    content: "",
    attachments: [],
    timestamp: 0,
    uploader: { name: "", avatar: "" },
  });

  useEffect(() => {
    setLoadState(LoadState.LOADING);

    (async () => {
      try {
        setRandomMessage(await api.messages.random());
        setLoadState(LoadState.DONE);
      } catch {
        setLoadState(LoadState.ERROR);
      }
    })();
  }, []);

  return (
    <>
      <Navbar
        onRandom={async () => {
          setLoadState(LoadState.LOADING);

          try {
            setRandomMessage(await api.messages.random());
            setLoadState(LoadState.DONE);
          } catch {
            setLoadState(LoadState.ERROR);
          }
        }}
      />

      <DesktopBrowser>
        <div className="mx-12 flex items-center">
          <Statistics />
        </div>

        <FreeRobuxObbyRobloxRobuxFreeRoboxApp />
      </DesktopBrowser>

      {loadState === LoadState.ERROR ? (
        <div className="absolute-center">
          <DesktopBrowser>
            <p className="text-xl dark:text-white text-black flex items-center">
              <span className="text-2xl mr-1 mt-0.5">{">~<"}</span>I can't fetch
              your messages
            </p>

            <p className="text-sm dark:text-white text-black">
              refresh maybe..?
            </p>
          </DesktopBrowser>

          <MobileBrowser>
            <p className="dark:text-white text-black flex items-center">
              {">~<"} I can't fetch your messages
            </p>

            <p className="text-sm dark:text-white text-black">
              refresh maybe..?
            </p>
          </MobileBrowser>
        </div>
      ) : loadState === LoadState.LOADING ? (
        <div className="absolute-center">
          <Spinner />
        </div>
      ) : (
        <div className={`${isMobile() ? "mx-3" : "mx-12"} my-4`}>
          <div className="mb-4 flex items-start">
            <img
              src={randomMessage.uploader.avatar}
              width={isMobile() ? 32 : 48}
              height={isMobile() ? 32 : 48}
              className="mr-2 rounded-full"
            />

            <div className="flex flex-col">
              <p className="flex items-center dark:text-white text-black">
                <span className="flex items-center" style={{ fontWeight: 550 }}>
                  {randomMessage.uploader.name}
                  <span className="mx-1 text-2xl">&middot;</span>
                </span>

                <span className="text-sm text-neutral-800 dark:text-neutral-500">
                  {formatUnixTime(randomMessage.timestamp)}
                </span>
              </p>

              {randomMessage.content &&
                (isURL(randomMessage.content.trim()) ? (
                  <img
                    src={randomMessage.content.trim()}
                    className="rounded-lg mb-1.5"
                  />
                ) : (
                  <p className="dark:text-white text-black">
                    {randomMessage.content}
                  </p>
                ))}

              {randomMessage.attachments.map((attachment) => (
                <img
                  src={attachment.url}
                  height={attachment.height}
                  width={attachment.width}
                  className="rounded-lg mb-1.5"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Random;
