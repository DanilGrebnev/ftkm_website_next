import { FC } from 'react'
import { SyntheticEvent } from 'react'

interface ICardMedia<S = string> {
    src: S
    alt?: S
    className?: S
    style?: React.CSSProperties
    onError?: (errorEvent: SyntheticEvent<HTMLImageElement, Event>) => void
    p?: S
    title?: string
}

export const ImgComponent: FC<ICardMedia> = ({
    src,
    alt,
    className,
    style,
    title,
    onError,
    p,
}) => {
    return (
        <div>
            <img
                title={title}
                loading='lazy'
                src={src}
                alt={alt}
                className={className}
                style={style}
                onError={onError}
            />
            {p && <p>{p}</p>}
        </div>
    )
}
