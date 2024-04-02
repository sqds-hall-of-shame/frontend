import { Message, api } from "@/utils/api";
import { ShareIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

interface Props {
  message: Message;
}

export const ShareButton: React.FC<Props> = (props: Props) => (
  <Link
    to={`/message/${props.message.id}`}
    onClick={() => api.science("shared_post")}
  >
    <button className="rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-100 p-1">
      <ShareIcon className="size-5 text-white" />
    </button>
  </Link>
);

export default ShareButton;
