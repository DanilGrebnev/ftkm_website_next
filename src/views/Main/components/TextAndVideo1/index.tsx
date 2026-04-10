import { Container } from "@mui/material";

import { LazyWhenVisible } from "@UI/LazyWhenVisible";
import { SourceAttributionNote } from "@/shared/ui/SourceAttributionNote";
import { VideoLazySkeleton } from "@/shared/ui/VideoLazySkeleton";

import { LazyPutinVideo } from "./LazyPutinVideo";
import style from "./style.module.scss";

export const TextAndVideo1 = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
      className={`Text-and-video-1 ${style.TextAndVideo1}`}
    >
      <blockquote className={style.quote} lang="ru">
        <p className={style.quoteLead}>
          <q>
            Сегодня работа сотен и тысяч горняков и металлургов во многом
            определяют динамику российской экономики
          </q>
          ,
        </p>
        <footer className={style.quoteAttribution}>
          — сказал Владимир Владимирович Путин о металлургии.
        </footer>
      </blockquote>
      <div className={style.mediaWrap}>
        <LazyWhenVisible
          rootMargin="200px"
          fallback={<VideoLazySkeleton variant="single" />}
        >
          <LazyPutinVideo />
        </LazyWhenVisible>
        <SourceAttributionNote
          className={style.videoNote}
          url="http://kremlin.ru/events/president/news/57999"
        >
          материал взят из открытых источников:
        </SourceAttributionNote>
      </div>
    </Container>
  );
};
