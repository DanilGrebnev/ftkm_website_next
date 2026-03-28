"use client";

import { Container } from "@mui/material";
import { useRouter } from "next/navigation";

import s from "./style.module.scss";

export const Questions = () => {
  const router = useRouter();

  return (
    <Container
      component="section"
      className={`Questions ${s.section}`}
      maxWidth="xl"
    >
      <div className={s.card}>
        <h2 className={s.title}>
          Есть <span className={s.titleAccent}>вопрос</span>?
        </h2>
        <p className={s.subtitle}>
          Задайте его нам — ответим в разделе контактов.
        </p>
        <button
          type="button"
          className={s.cta}
          onClick={() => router.push("/contacts")}
        >
          Есть вопрос? Задай его нам!
        </button>
      </div>
    </Container>
  );
};
