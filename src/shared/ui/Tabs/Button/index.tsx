import cn from 'classnames'
import React from 'react'

import { IButton } from '../interface'
import s from './s.module.scss'

/**
 * @text текст кнопки
 * @buttonIndex индекс кнопки
 * @currentTab текущий индекс открытого таба
 */
export const Button: React.FC<IButton> = ({
    buttonIndex,
    text,
    currentTab,
    onClick,
    style,
}) => {
    return (
        <button
            style={style}
            onClick={onClick}
            className={cn(s.button, {
                [s.active]: +buttonIndex === +currentTab,
            })}
            value={buttonIndex}
        >
            {text}
        </button>
    )
}
