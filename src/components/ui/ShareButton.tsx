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
    <button className="rounded-full flex items-center justify-center bg-black bg-opacity-[50%] hover:bg-opacity-[70%] dark:bg-white dark:bg-opacity-[15%] dark:hover:bg-opacity-[30%] duration-100 p-1">
      <ShareIcon className="size-5 text-white" />
    </button>
  </Link>
);

export default ShareButton;
