"use client";

import { useGetWindowWidth } from "@hooks/useGetWindowWidth";
import Container from "@mui/material/Container";

import type { IArticleDTO } from "@/shared/api/requests/articles";

import { LazyAccordion } from "./Accordion/LazyAccordion";
import { ButtonArchive } from "./ButtonArchive";
import { LazyNewsList } from "./NewsList/LazyNewsList";
import s from "./style.module.scss";

interface NewsBlockClientProps {
  lastNews: IArticleDTO[];
}

export function NewsBlockClient({ lastNews }: NewsBlockClientProps) {
  const { currentWidth } = useGetWindowWidth();

  return (
    <Container
      id="News-Block"
      className={s.wrapper}
      maxWidth="xl"
      component="section"
    >
      <header className={s.header}>
        <h2 className={s.title}>
          Последние <span className={s.titleAccent}>новости</span>
        </h2>
        <p className={s.subtitle}>
          События и публикации кафедры
        </p>
      </header>

      {lastNews.length > 0 && currentWidth >= 750 && (
        <LazyNewsList
          className={s["news-block-desktop"]}
          lastNews={lastNews}
        />
      )}

      {lastNews.length > 0 && currentWidth <= 749 && (
        <LazyAccordion
          newsListClassName={s["news-list-mobile"]}
          className={s["news-block-mobile"]}
          lastNews={lastNews}
        />
      )}

      {lastNews.length > 0 && <ButtonArchive />}
    </Container>
  );
}
