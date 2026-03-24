import clsx from 'clsx'
import { type FC } from 'react'

import s from './s.module.scss'

interface IGalleryProps {
    className?: string
    images: string[]
}

export const Gallery: FC<IGalleryProps> = props => {
    const { className, images } = props

    return (
        <div className={clsx(s.Gallery, className)}>
            {images.map((src, i) => {
                if (i > 5) return null

                return (
                    <div
                        key={i}
                        className={s.img}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                )
            })}
        </div>
    )
}

Gallery.displayName = 'Gallery'
