import { SourceAttributionNote } from "@/shared/ui/SourceAttributionNote";
import { VidstackPlayer } from "@/shared/ui/VidstackPlayer";

import s from "../style.module.scss";

function VideoList() {
  return (
    <>
      <div className={s.videoItem}>
        <VidstackPlayer
          title="Металлургия — это красиво (фрагмент 1)"
          src="/videos/hero_video_1.mp4"
          className={s.video1}
        />
        <SourceAttributionNote url="https://www.youtube.com/watch?v=KpnW1E0mmgc" className={s.videoNote}>
          материал взят из открытых источников:
        </SourceAttributionNote>
      </div>
      <div className={s.videoItem}>
        <VidstackPlayer
          title="Металлургия — это красиво (фрагмент 2)"
          src="/videos/hero_video_2.mp4"
          className={s.video2}
        />
        <SourceAttributionNote url="https://www.youtube.com/watch?v=qYMFJE3CQi0" className={s.videoNote}>
          материал взят из открытых источников:
        </SourceAttributionNote>
      </div>
    </>
  );
}

export { VideoList };
export default VideoList;
