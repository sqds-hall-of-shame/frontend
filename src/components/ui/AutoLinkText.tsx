import { isURL } from "@/utils/isURL";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
}

export const AutoLinkText: React.FC<Props> = ({ className, text }: Props) => {
  const [content, setContent] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const accumulator: React.ReactNode[] = [];
    let currentStringChunk = "";

    for (const chunk of text.split(" ")) {
      if (isURL(chunk)) {
        accumulator.push(currentStringChunk);
        accumulator.push(
          <a
            className="text-blue-600 hover:text-blue-700 duration-100"
            href={chunk}
            target="_blank"
            rel="noopener noreferrer"
          >
            {chunk}
          </a>,
        );
        currentStringChunk = "";
        continue;
      }

      currentStringChunk += chunk + " ";
    }

    setContent(accumulator);
  }, [text]);

  return <p className={className}>{content}</p>;
};

export default AutoLinkText;
