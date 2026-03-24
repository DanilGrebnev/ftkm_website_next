'use client'

import { Swiper } from './components/Swiper/Swiper'
import s from './s.module.scss'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'

export const SwiperEquipment = () => {
    return (
        <section className={s.SwiperEquipment}>
            <AnimationSlideBlock>
                <h2 className={s.title}>Оборудование кафедры</h2>
            </AnimationSlideBlock>
            <AnimationSlideBlock direction='right'>
                <Swiper />
            </AnimationSlideBlock>
        </section>
    )
}
