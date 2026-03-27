import { Container } from '@mui/material'
import clsx from 'clsx'

import { ItemCircle } from './ItemCircle'
import s from './style.module.scss'

export const Admission = () => {
    const year = new Date().getFullYear()

    return (
        <section
            id='Admission'
            className={s.admission}
        >
            <h2>Поступление {year}</h2>
            <Container
                className={s['admission-container']}
                maxWidth='xl'
            >
                <div className={s['admission-content']}>
                    <div>
                        <h3 className={clsx(s['circle-title'], s.title1)}>
                            Количество бюджетных мест
                        </h3>
                    </div>
                    <div>
                        <h3 className={clsx(s['circle-title'], s.title2)}>
                            Проходной балл
                        </h3>
                    </div>
                    <div className={clsx(s['circle-title'], s.title3)}>
                        <h3>Срок обучения</h3>
                    </div>
                    <div>
                        <ItemCircle
                            className={clsx(s.circle, s.circle1)}
                            circleText='40'
                        />
                    </div>
                    <div>
                        <ItemCircle
                            className={clsx(s.circle, s.circle2)}
                            circleText='118'
                        />
                    </div>
                    <div>
                        <ItemCircle
                            className={clsx(s.circle, s.circle3)}
                            circleText='4'
                            subCircleText='Бакалавриат'
                        />
                    </div>
                    <div>
                        <ItemCircle
                            className={clsx(s.circle, s.circle4)}
                            circleText='2'
                            subCircleText='Магистратура'
                        />
                    </div>
                </div>
                <p className={s['footer-text']}>
                    А также возможность продлить обучение по программе
                    Аспирантуры
                </p>
            </Container>
        </section>
    )
}
