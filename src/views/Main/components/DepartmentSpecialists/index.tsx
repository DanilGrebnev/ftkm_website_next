import { Container } from "@mui/material";

import { data } from "./data";
import s from "./style.module.scss";

export const DepartmentSpecialists = () => {
  return (
    <Container
      component="section"
      id="Cooperation"
      className={`DepartmentSpecialists ${s.container}`}
      maxWidth="xl"
    >
      <header className={s.header}>
        <h2 className={s.title}>
          Специалисты <span className={s.titleAccent}>кафедры</span>
        </h2>
        <p className={s.intro}>
          Высококвалифицированные специалисты кафедры МиТЛП обладают большим
          опытом и помогут вам решить вопросы:
        </p>
      </header>

      <div className={s.panel}>
        <ol className={s.numberedList}>
          {data.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
      </div>
    </Container>
  );
};
