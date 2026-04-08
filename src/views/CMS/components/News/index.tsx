"use client";

import { useEffect } from "react";

import { useNewsEditorStore } from "@/entities/article/model/store/useNewsEditorStore";
import {
  useGetArticlesPageQuery,
  type IArticleDTO,
} from "@/shared/api/requests/articles";
import { globalVariables } from "@globalVariables";

import s from "./News.module.scss";
import { AddNewsBtn } from "./components/AddNewsBtn";
import { ButtonContainer } from "./components/ButtonContainer";
import { NewsContainer } from "./components/NewsContainer";

export const News = () => {
  const clearFields = useNewsEditorStore((s) => s.clearFields);

  useEffect(() => {
    clearFields();
  }, [clearFields]);

  const query = useGetArticlesPageQuery({
    skip: 0,
    limit: globalVariables.limit,
  });

  const articles: IArticleDTO[] = query.data ?? [];
  const isInitialLoading = query.isLoading && !query.data;

  return (
    <section className={s.news}>
      <header className={s.header}>
        <AddNewsBtn />
        <ButtonContainer
          hasNextPage={query.hasNextPage}
          isFetchingNextPage={query.isFetchingNextPage}
          isInitialLoading={isInitialLoading}
          onLoadMore={() => {
            void query.fetchNextPage();
          }}
        />
      </header>
      <NewsContainer
        articles={articles}
        isLoading={isInitialLoading}
      />
    </section>
  );
};
