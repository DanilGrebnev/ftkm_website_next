import { VidstackPlayer } from "@/shared/ui/VidstackPlayer";

import s from "../style.module.scss";

function VideoList() {
  return (
    <>
      <VidstackPlayer
        title="Металлургия — это красиво (фрагмент 1)"
        src="/videos/hero_video_1.mp4"
        className={s.video1}
      />
      <VidstackPlayer
        title="Металлургия — это красиво (фрагмент 2)"
        src="/videos/hero_video_2.mp4"
        className={s.video2}
      />
    </>
  );
}

export { VideoList };
export default VideoList;
