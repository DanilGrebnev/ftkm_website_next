import Container from "@mui/material/Container";

import s from "@/views/Main/components/NewsBlock/style.module.scss";

export function NewsHomeDegraded() {
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
      <div className={s.emptyCard} role="status">
        <p className={s.emptyHint}>Новости появятся позже.</p>
      </div>
    </Container>
  );
}
