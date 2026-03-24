import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import React from 'react'

import s from './s.module.scss'

interface IDateBlock {
    createdDate: number
}

export const DateBlock: React.FC<IDateBlock> = ({ createdDate }) => {
    return (
        <div className={s.date}>
            <CalendarMonthSharpIcon sx={{ color: '#0f78ed' }} />
            <p>Дата публикации:</p>
            <p>{createdDate}</p>
        </div>
    )
}
