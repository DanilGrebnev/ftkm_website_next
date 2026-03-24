import clsx from 'clsx'

import s from './s.module.scss'

interface IItemCircle<S = React.ReactNode> {
    circleText?: S
    subCircleText?: S
    title?: S
    className?: S
}

export const ItemCircle: React.FC<IItemCircle> = ({
    circleText,
    subCircleText,
    title,
    className,
}) => {
    return (
        <div className={clsx(s.ItemCircle, className)}>
            <p className={s.title}>{title}</p>
            <div className={s.circle}>{circleText}</div>
            <p className={s['subcircle-text']}>{subCircleText}</p>
        </div>
    )
}
