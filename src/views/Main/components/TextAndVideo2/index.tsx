import { Container } from "@mui/material";
import clsx from "clsx";

import { LazyWhenVisible } from "@UI/LazyWhenVisible";
import { VideoLazySkeleton } from "@/shared/ui/VideoLazySkeleton";

import { LazyHeroVideos } from "./LazyHeroVideos";
import s from "./style.module.scss";

export const TextAndVideo2 = () => {
  return (
    <Container
      className={clsx("Text-and-video-2", s.TextAndVideo2)}
      maxWidth="lg"
    >
      <h2 className={s.title}>
        <span className={s.titleLead}>Все профессии хороши, но </span>
        <span className={s.titleAccent}>Металлург</span>
        <span className={s.titleTail}> — звучит гордо</span>
      </h2>
      <LazyWhenVisible
        className={s.lazyVideoRow}
        rootMargin="200px"
        fallback={<VideoLazySkeleton variant="grid" />}
      >
        <LazyHeroVideos />
      </LazyWhenVisible>
    </Container>
  );
};
