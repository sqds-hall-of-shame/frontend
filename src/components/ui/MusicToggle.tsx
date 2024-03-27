import { MusicalNoteIcon } from "@heroicons/react/24/outline";

interface Props {
  className?: string;
  onClick?: () => never | void;
}

export const MusicToggle: React.FC<Props> = (props: Props) => {
  let interval = 0;

  return (
    <button
      onClick={() => {
        const music = document.getElementById(
          "music-audio-element",
        )! as HTMLAudioElement;

        if (music.ended) {
          music.currentTime = 0;
        }

        if (music.paused) {
          music.play();

          interval = setInterval(() => {
            if (!music.paused) {
              localStorage.setItem(
                "music-timestamp",
                String(music.currentTime),
              );
            }
          });
        } else {
          music.pause();
          clearInterval(interval);
        }

        if (props.onClick) {
          props.onClick();
        }
      }}
      className="cursor-pointer"
    >
      <div className="duration-150 hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20 p-1 rounded-lg">
        <MusicalNoteIcon className="size-9 text-black dark:text-white" />
      </div>
    </button>
  );
};

export default MusicToggle;