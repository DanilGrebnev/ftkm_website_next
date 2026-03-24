import React from 'react'

import s from './s.module.scss'

interface IEmployeeItem<S = string> {
    name: S
    rank: S
    link: S
}

export const EmployeeItem: React.FC<IEmployeeItem> = ({ link, name, rank }) => {
    return (
        <div className={s.EmployeeItem}>
            <a href={link}>{name}</a>
            <p>{rank}</p>
        </div>
    )
}
