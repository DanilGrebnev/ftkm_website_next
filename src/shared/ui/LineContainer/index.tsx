import cn from 'classnames'
import { FC } from 'react'

import { LineContainerProps } from '@interfaces/LineContainer'
import s from './style.module.scss'

export const LineContainer: FC<LineContainerProps> = ({
    style,
    className,
    children,
}): JSX.Element => {
    return (
        <section
            className={cn(className, s.LineContainer)}
            style={style}
        >
            <span className={s.lineTop}></span>
            {children}
            <span className={s.lineBot}></span>
        </section>
    )
}
