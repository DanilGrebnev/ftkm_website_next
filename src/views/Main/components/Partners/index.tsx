import { Container } from "@mui/material";

import { LazyImgList } from "./components/ImgListLazy";
import style from "./style.module.scss";

export const Partners = () => {
  return (
    <Container
      component="section"
      className={`Partners ${style.Partners}`}
      maxWidth="lg"
    >
      <header className={style.header}>
        <h2 className={style.title}>
          Наши <span className={style.titleAccent}>партнёры</span>
        </h2>
        <h3 className={style.subtitle}>
          На этих предприятиях работают наши выпускники
        </h3>
      </header>
      <LazyImgList />
    </Container>
  );
};
