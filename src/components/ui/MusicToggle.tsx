import { MusicalNoteIcon } from "@heroicons/react/24/outline";

export const MusicToggle: React.FC = () => {
  return (
    <button
      onClick={() => {
        const music = document.getElementById(
          "music-audio-element",
        )! as HTMLAudioElement;

        if (music.paused) {
          music.play();
        } else {
          music.pause();
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
