import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Navbar } from "@/components/ui/Navbar";
import { Spinner } from "@/components/ui/Spinner";
import { api, Message } from "@/utils/api";
import { formatUnixTime } from "@/utils/formatUnixTime";
import { isMobile } from "@/utils/isMobile";

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
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-white">backend | Third commit (pt.2)</p>
              <p className="text-white">
                frontend | feat: better navbar design
              </p>
              <p className="text-white">frontend | fix: icon drag</p>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-white">backend | Second commit (pt.2)</p>
              <p className="text-white">backend | Second commit (pt.1)</p>
              <p className="text-white">backend | FIRST COMMIT (pt.2)</p>
            </div>
          </div>
        </div>

        <p
          className="fixed bottom-1 left-0 w-full flex justify-center text-black dark:text-white"
          style={{ fontSize: "12px" }}
        >
          Brought to you by:
          <code className="mx-1 px-1.5 bg-neutral-800 text-white rounded-lg">
            baluwuhost
          </code>
          |
          <Link
            to="/free-robux-obby-roblox-robux-free-robox-app"
            className="ml-1 text-blue-600 hover:text-blue-500"
          >
            Free robux obby roblox robux free robox app
          </Link>
        </p>
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
        messages.map((message) => (
          <div
            className={`${isMobile() ? "mx-3" : "mx-12"} my-2 flex items-start`}
          >
            <img
              src={`data:image/webp;base64,${message.uploader.avatar}`}
              width={48}
              height={48}
              className="mr-2 rounded-full"
            />

            <div className="flex flex-col">
              <p className="flex items-center dark:text-white text-black">
                <span className="flex items-center" style={{ fontWeight: 550 }}>
                  {message.uploader.name}
                  <span className="mx-1 text-2xl">&middot;</span>
                </span>

                <span className="text-sm text-neutral-800 dark:text-neutral-500">
                  {formatUnixTime(message.timestamp)}
                </span>
              </p>

              {message.content && (
                <p className="dark:text-white text-black">{message.content}</p>
              )}

              {message.attachments.map((attachment) => (
                <img
                  src={`data:${attachment.contentType};base64,${attachment.content}`}
                  alt={attachment.filename}
                />
              ))}
            </div>
          </div>
        ))
      )}

      <div className="fixed bottom-3 right-3 py-1.5 px-3 inline-flex z-50 bg-black bg-opacity-[50%] dark:bg-white dark:bg-opacity-[10%] duration-150 rounded-xl backdrop-filter backdrop-blur-[8px]">
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
    </>
  );
};

export default Index;
