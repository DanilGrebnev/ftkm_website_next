import { type FC } from 'react'

import s from './Vide.module.scss'

interface IVideProps {
    src: string | undefined
}

export const Vide: FC<IVideProps> = (props) => {
    const { src } = props
    if (!src) return null

    return (
        <iframe
            className={s.video}
            src={src}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
    )
}

Vide.displayName = 'Vide'
