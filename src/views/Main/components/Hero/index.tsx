import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { HeightCalcHelper } from '@/shared/utils/HeightHelper'

import s from './style.module.scss'

export const Hero = () => {
    const [height, setHeight] = useState<number | null>(null)

    useEffect(() => {
        setHeight(HeightCalcHelper.height)
    }, [])
    const calculatedHeight = !height ? '100vh' : height

    return (
        <section className={clsx('Hero', s.Hero)}>
            <div
                style={{ height: calculatedHeight }}
                className={s.VideoFilter}
            >
                <div className={s.VideoFilterContent}>
                    <span className={s.title}>
                        машины и технология <br /> литейного производства
                    </span>
                    <h4 className={s['side-preparation']}>
                        Направления подготовки
                    </h4>
                    <h4>Металлургия, машиностроение</h4>
                    <div className={s.Faculty}>
                        <p>факультет технологии конструкционных материалов</p>
                    </div>
                </div>
            </div>

            <video
                className={s.VideoIntro}
                loop={true}
                autoPlay={true}
                preload='metadata'
                muted
                poster='images/preloadmetallurgy.webp'
                style={{ height: calculatedHeight }}
            >
                <source src='videos/metallurgy.mp4' />
            </video>
        </section>
    )
}
