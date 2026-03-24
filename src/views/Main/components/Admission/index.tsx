'use client'

import { Container } from '@mui/material'
import clsx from 'clsx'

import { ItemCircle } from './ItemCircle'
import s from './style.module.scss'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'

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
                    <AnimationSlideBlock>
                        <h3 className={clsx(s['circle-title'], s.title1)}>
                            Количество бюджетных мест
                        </h3>
                    </AnimationSlideBlock>
                    <AnimationSlideBlock>
                        <h3 className={clsx(s['circle-title'], s.title2)}>
                            Проходной балл
                        </h3>
                    </AnimationSlideBlock>
                    <AnimationSlideBlock
                        className={clsx(s['circle-title'], s.title3)}
                    >
                        <h3>Срок обучения</h3>
                    </AnimationSlideBlock>
                    <AnimationSlideBlock delay={1}>
                        <ItemCircle
                            className={clsx(s.circle, s.circle1)}
                            circleText='40'
                        />
                    </AnimationSlideBlock>
                    <AnimationSlideBlock delay={1}>
                        <ItemCircle
                            className={clsx(s.circle, s.circle2)}
                            circleText='118'
                        />
                    </AnimationSlideBlock>
                    <AnimationSlideBlock delay={1}>
                        <ItemCircle
                            className={clsx(s.circle, s.circle3)}
                            circleText='4'
                            subCircleText='Бакалавриат'
                        />
                    </AnimationSlideBlock>
                    <AnimationSlideBlock delay={1}>
                        <ItemCircle
                            className={clsx(s.circle, s.circle4)}
                            circleText='2'
                            subCircleText='Магистратура'
                        />
                    </AnimationSlideBlock>
                </div>
                <AnimationSlideBlock
                    delay={1.5}
                    direction='left'
                >
                    <p className={s['footer-text']}>
                        А также возможность продлить обучение по программе
                        Аспирантуры
                    </p>
                </AnimationSlideBlock>
            </Container>
        </section>
    )
}
