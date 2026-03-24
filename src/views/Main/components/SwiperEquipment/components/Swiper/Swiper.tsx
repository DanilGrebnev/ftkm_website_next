'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

import { slideList } from '../../lib/slideList'
import s from './Swiper.module.scss'

const SwiperComponet = dynamic(
    () => import('@UI/Swiper').then(mod => ({ default: mod.SwiperComponet })),
    { ssr: false }
)

export const Swiper = memo(() => {
    return (
        <SwiperComponet
            className={s.swiper}
            navigation
            pagination
            slidesPerView={1}
            spaceBetween={20}
            maxWdth='lg'
        >
            {slideList}
        </SwiperComponet>
    )
})
