"use client";

import { useNewsEditorStore } from "@/entities/article/model/store/useNewsEditorStore";
import { useEffect } from "react";

import s from "./News.module.scss";
import { AddNewsBtn } from "./components/AddNewsBtn";
import { ButtonContainer } from "./components/ButtonContainer";
import { NavButton } from "./components/NavButton";
import { NewsContainer } from "./components/NewsContainer";

export const News = () => {
  const clearFields = useNewsEditorStore((s) => s.clearFields);

  useEffect(() => {
    clearFields();
  });

  return (
    <section className={s.news}>
      <header className={s.header}>
        <AddNewsBtn />
        <ButtonContainer />
        <NavButton />
      </header>
      <NewsContainer />
    </section>
  );
};
