import { Container } from "@mui/material";
import clsx from "clsx";

import type { IAdmissionItem } from "@/entities/admission/model/server_actions/types/AdmissionItem";

import { ItemCircle } from "./ItemCircle";
import s from "./style.module.scss";

interface AdmissionProps {
  items: IAdmissionItem[];
}

export const Admission = ({ items }: AdmissionProps) => {
  const year = new Date().getFullYear();

  return (
    <section id="Admission" className={s.admission}>
      <h2>Поступление {year}</h2>
      <Container className={s["admission-container"]} maxWidth="xl">
        {items.length === 0 ? (
          <p className={s["empty-hint"]}>
            Информация о направлениях подготовки будет опубликована позднее.
          </p>
        ) : (
          <ul className={s["directions-list"]}>
            {items.map((item, index) => (
              <li
                key={`${item.direction}-${index}`}
                className={s["direction-block"]}
              >
                <h3 className={s["direction-title"]}>{item.direction}</h3>
                <div className={s["circles-row"]}>
                  <ItemCircle
                    className={clsx(s.circle, s.circleBudget)}
                    title="Бюджетных мест"
                    circleText={String(item.budgetPlaces)}
                  />
                  <ItemCircle
                    className={clsx(s.circle, s.circlePassing)}
                    title="Проходной балл"
                    circleText={item.passingScore}
                  />
                </div>
                {item.additionalInformation ? (
                  <p className={s["additional-info"]}>
                    {item.additionalInformation}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
        <p className={s["footer-text"]}>
          А также возможность продлить обучение по программе Аспирантуры
        </p>
      </Container>
    </section>
  );
};
