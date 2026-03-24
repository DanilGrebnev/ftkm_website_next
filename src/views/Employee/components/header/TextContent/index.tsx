import clsx from 'clsx'
import React from 'react'

import s from './s.module.scss'

interface IProps<T = string> {
    leftText: T
    rightText: T
    className?: string
}

export const TextContent: React.FC<IProps> = ({
    leftText,
    rightText,
    className,
}) => (
    <div className={clsx(s.TextContent, className)}>
        <strong>{leftText}:</strong>
        {rightText}
    </div>
)
