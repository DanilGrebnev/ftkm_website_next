import { List } from "@components/List";
import { Container } from "@mui/material";

import { data } from "./data";
import s from "./s.module.scss";

export const ScientificDirection = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="ScientificDirection"
      className={s.ScientificDirection}
    >
      <header className={s.header}>
        <h2 className={s.title}>
          Научные <span className={s.titleAccent}>направления</span>
        </h2>
      </header>

      <div className={s.panel}>
        {data.map(({ title, list }, i) => (
          <List
            key={i}
            className={s.listBlock}
            title={title}
            list={list}
          />
        ))}
      </div>

      <p className={s.results}>
        Результаты реализации научных и технологических разработок специалистов
        литейной кафедры ВолгГТУ за последние 10 лет внедрены на АО &quot;ВТЗ&quot;,
        ОАО &quot;ДЭМЗ&quot;, ОАО &quot;ЗКО&quot;, ОАО &quot;Алтайвагонзавод&quot;, ОАО
        &quot;Волгограднефетмаш&quot;, ООО &quot;Forte Metals&quot; и других. Каждый год
        специалисты кафедры участвуют в модернизации производства на предприятиях
        Российской Федерации.
      </p>
    </Container>
  );
};
