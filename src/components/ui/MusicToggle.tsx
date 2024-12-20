import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { isMobile } from "@/utils/isMobile";
import { api } from "@/utils/api";

export const MusicToggle: React.FC = () => (
  <button
    onClick={() => {
      const music = document.getElementById(
        "music-audio-element",
      )! as HTMLAudioElement;

      if (music.paused) {
        music.play();
        api.science("music_play");
      } else {
        music.pause();
        api.science("music_stop");
      }
    }}
    className="cursor-pointer"
  >
    <div
      className={`duration-150 ${isMobile() ? "text-black" : "hover:bg-black hover:bg-opacity-30 dark:hover:bg-white dark:hover:bg-opacity-20"} p-2 rounded-lg`}
    >
      <MusicalNoteIcon className="size-7 text-white" />
    </div>
  </button>
);

export default MusicToggle;
