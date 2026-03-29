import { Container } from '@mui/material'

import type { IAdmissionItem } from '@/entities/admission/api/types/AdmissionItem'

import s from './style.module.scss'

interface AdmissionProps {
    items: IAdmissionItem[]
}

export const Admission = ({ items }: AdmissionProps) => {
    const year = new Date().getFullYear()

    return (
        <section
            id='Admission'
            className={s.admission}
        >
            <Container
                className={s.inner}
                maxWidth='xl'
            >
                <header className={s.header}>
                    <h2 className={s.title}>
                        Поступление <span className={s.titleYear}>{year}</span>
                    </h2>
                    <p className={s.lead}>
                        Бюджетные места и проходной балл по направлениям
                    </p>
                </header>

                {items.length === 0 ? (
                    <div
                        className={s.emptyCard}
                        role='status'
                    >
                        <p className={s.emptyHint}>
                            Информация о направлениях подготовки будет
                            опубликована позднее.
                        </p>
                    </div>
                ) : (
                    <ul className={s.grid}>
                        {items.map((item, index) => (
                            <li key={`${item.direction}-${index}`}>
                                <article className={s.card}>
                                    <div
                                        className={s.cardRibbon}
                                        aria-hidden
                                    />
                                    <h3 className={s.directionTitle}>
                                        {item.direction}
                                    </h3>

                                    <div className={s.stats}>
                                        <div className={s.stat}>
                                            <div
                                                className={s.orb}
                                                aria-hidden
                                            >
                                                <span className={s.orbValue}>
                                                    {item.budgetPlaces}
                                                </span>
                                            </div>
                                            <p className={s.statLabel}>
                                                Бюджетных мест
                                            </p>
                                        </div>

                                        <div
                                            className={s.statDivider}
                                            aria-hidden
                                        />

                                        <div className={s.stat}>
                                            <div
                                                className={s.orb}
                                                aria-hidden
                                            >
                                                <span className={s.orbValue}>
                                                    {item.passingScore}
                                                </span>
                                            </div>
                                            <p className={s.statLabel}>
                                                Проходной балл
                                            </p>
                                        </div>
                                    </div>

                                    {item.additionalInformation ? (
                                        <p className={s.additional}>
                                            {item.additionalInformation}
                                        </p>
                                    ) : null}
                                </article>
                            </li>
                        ))}
                    </ul>
                )}

                <div className={s.footerCallout}>
                    <p className={s.footerText}>
                        А также возможность продлить обучение по программе{' '}
                        <span className={s.footerAccent}>Аспирантуры</span>
                    </p>
                </div>
            </Container>
        </section>
    )
}
