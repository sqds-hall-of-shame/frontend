import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
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

const items = 10;

enum LoadState {
  LOADING = "Loading",
  ERROR = "Error",
  DONE = "Done",
}

export const Index: React.FC = () => {
  const [loadState, setLoadState] = useState(LoadState.LOADING);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [random, setRandom] = useState(false);
  const [randomMessage, setRandomMessage] = useState<Message | null>(null);

  useEffect(() => {
    setLoadState(LoadState.LOADING);

    (async () => {
      try {
        setPages(await api.messages.pages(items));
        setMessages(await api.messages.call(items, page));
        setLoadState(LoadState.DONE);
      } catch {
        setLoadState(LoadState.ERROR);
      }
    })();
  }, [page]);

  return (
    <>
      <Navbar
        onRandomClick={async () => {
          setLoadState(LoadState.LOADING);

          try {
            setRandomMessage(await api.messages.random());
            setLoadState(LoadState.DONE);
            setRandom(true);
          } catch {
            setLoadState(LoadState.ERROR);
            return;
          }
        }}
        onUnrandomClick={() => setRandom(false)}
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
      ) : random && randomMessage ? (
        <div className={`${isMobile() ? "mx-3" : "mx-12"} my-4`}>
          <div className="mb-4 flex items-start">
            <img
              src={randomMessage.uploader.avatar}
              width={48}
              height={48}
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
      ) : (
        <div
          className={`${isMobile() ? "mx-3" : "mx-12"} my-4 bg-black bg-opacity-[10%] dark:bg-white dark:bg-opacity-[3%] p-3 rounded-lg`}
        >
          {messages.map((message) => (
            <div className="mb-4 flex items-start">
              <img
                src={message.uploader.avatar}
                width={48}
                height={48}
                className="mr-2 rounded-full"
              />

              <div className="flex flex-col">
                <p className="flex items-center dark:text-white text-black">
                  <span
                    className="flex items-center"
                    style={{ fontWeight: 550 }}
                  >
                    {message.uploader.name}
                    <span className="mx-1 text-2xl">&middot;</span>
                  </span>

                  <span className="text-sm text-neutral-800 dark:text-neutral-500">
                    {formatUnixTime(message.timestamp)}
                  </span>
                </p>

                {message.content &&
                  (isURL(message.content.trim()) ? (
                    <img
                      src={message.content.trim()}
                      className="rounded-lg mb-1.5"
                    />
                  ) : (
                    <p className="dark:text-white text-black">
                      {message.content}
                    </p>
                  ))}

                {message.attachments.map((attachment) => (
                  <img
                    src={attachment.url}
                    height={attachment.height}
                    width={attachment.width}
                    className="rounded-lg mb-1.5"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!random && (
        <div
          className={`fixed bottom-3 right-3 ${isMobile() ? "py-1.5 px-3" : "p-3 px-8"} inline-flex z-50 bg-black bg-opacity-[50%] dark:bg-white dark:bg-opacity-[10%] duration-150 rounded-xl backdrop-filter backdrop-blur-[8px]`}
        >
          <button
            onClick={() => {
              if (page <= 10) {
                setPage(1);
                return;
              }

              setPage(page - 10);
            }}
            className="mr-1 px-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-100"
          >
            <ChevronDoubleLeftIcon className="size-6 text-white" />
          </button>

          <button
            onClick={() => page > 1 && setPage(page - 1)}
            className="mr-2 px-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-100"
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>

          <p className="text-lg text-white">
            Page {page} of {pages}
          </p>

          <button
            onClick={() => page < pages && setPage(page + 1)}
            className="ml-2 px-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-100"
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>

          <button
            onClick={() => {
              if (page + 10 >= pages) {
                setPage(pages);
                return;
              }

              setPage(page + 10);
            }}
            className="ml-1 px-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-100"
          >
            <ChevronDoubleRightIcon className="size-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Index;
