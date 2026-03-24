import s from './s.module.scss'
import { ImgComponent } from '@components/ImgComponent'
import { type FC } from 'react'

interface PeopleProps {
    alt: string
    src: string
    description: string
}

function createMarkup(html: any) {
    return { __html: html }
}

export const People: FC<PeopleProps> = (props) => {
    const { alt, description, src } = props

    return (
        <div className={s.item}>
            <ImgComponent
                alt={alt}
                src={src}
            />
            <p dangerouslySetInnerHTML={createMarkup(description)}></p>
        </div>
    )
}
