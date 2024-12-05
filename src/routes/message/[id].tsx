import { DesktopBrowser } from "@/components/ui/DesktopBrowser";
import { MobileBrowser } from "@/components/ui/MobileBrowser";
import { Spinner } from "@/components/ui/Spinner";
import { AutoLinkText } from "@/components/ui/AutoLinkText";
import { api, Message } from "@/utils/api";
import { formatUnixTime } from "@/utils/formatUnixTime";
import { isMobile } from "@/utils/isMobile";
import { isURL } from "@/utils/isURL";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/16/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

enum LoadState {
  LOADING = "Loading",
  ERROR = "Error",
  DONE = "Done",
}

export const MessageId: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [loadState, setLoadState] = useState(LoadState.LOADING);
  const [message, setMessage] = useState<Message>({
    id: "",
    content: "",
    attachments: [],
    timestamp: 0,
    uploader: { name: "", id: "" },
  });
  const { id } = useParams();

  useEffect(() => {
    setLoadState(LoadState.LOADING);

    (async () => {
      try {
        setMessage(await api.messages.id(id!));
        setLoadState(LoadState.DONE);
      } catch {
        setLoadState(LoadState.ERROR);
      }
    })();
  }, [id]);

  return (
    <>
      <div className="p-2 flex">
        <Link to="/" className="mr-1">
          <button className="flex justify-center items-center text-center p-1.5 px-4 rounded-[10px] select-none transition text-white dark:bg-[#343434] dark:hover:bg-[#494949] border-2 border-transparent bg-neutral-600 hover:bg-neutral-700">
            <ArrowLeftIcon className="w-6 h-6 mr-1" />
            Back
          </button>
        </Link>

        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
          className="flex justify-center items-center text-center p-1.5 px-4 rounded-[10px] select-none transition text-white dark:bg-[#343434] dark:hover:bg-[#494949] border-2 border-transparent bg-neutral-600 hover:bg-neutral-700"
        >
          {copied ? (
            <CheckIcon className="w-6 h-6 mr-1" />
          ) : (
            <ClipboardIcon className="w-6 h-6 mr-1" />
          )}
          Copy link
        </button>
      </div>

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
        <div
          className={`${isMobile() ? "mx-3" : "mx-12"} my-4 bg-black bg-opacity-[10%] dark:bg-white dark:bg-opacity-[3%] p-3 rounded-lg`}
        >
          <div className="flex items-start">
            <img
              src={`/avatars/${message.uploader.id}.webp`}
              width={isMobile() ? 32 : 48}
              height={isMobile() ? 32 : 48}
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

              {message.content &&
                (isURL(message.content.trim()) ? (
                  <img
                    src={message.content.trim()}
                    className="rounded-lg mb-1.5"
                  />
                ) : (
                  <AutoLinkText
                    className="dark:text-white text-black"
                    text={message.content}
                  />
                ))}

              {message.attachments.map((attachment) => (
                <img
                  src={`/attachments/${attachment.id}/${attachment.filename}`}
                  height={attachment.height}
                  width={attachment.width}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageId;
