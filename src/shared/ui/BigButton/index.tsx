import React from 'react'

import s from './s.module.scss'

export const BlueButton: React.FC<IBigButton> = ({ style }) => (
    <a
        style={style}
        data-type="button"
        className={s.btn}
        href="https://volgograd.hh.ru/vacancies/metallurg"
    >
        Узнай вакансии для твоей будущей специальности
    </a>
)

interface IBigButton {
    style?: React.CSSProperties
}
