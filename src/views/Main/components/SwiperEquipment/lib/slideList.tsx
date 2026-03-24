import { Gallery } from '../components/Gallery'
import s from '../s.module.scss'

const srcList = [
    'images/equipment/1.webp',
    'images/equipment/2.webp',
    'images/equipment/3.webp',
    'images/equipment/4.webp',
    'images/equipment/5.webp',
    'images/equipment/6.webp',
    'images/equipment/7.webp',
    'images/equipment/8.webp',
    'images/equipment/9.webp',
]

export const slideList = srcList.reduce((acc: any, src, i) => {
    if (!i) {
        acc.push(
            <Gallery
                key='gallery'
                images={srcList}
            />
        )
    }

    acc.push(
        <div
            key={`slide-${i}`}
            className={s['img-wrapper']}
        >
            <img
                alt='ВолгГТУ оборудование'
                className={s.img}
                src={src}
            />
        </div>
    )

    return acc
}, [])
