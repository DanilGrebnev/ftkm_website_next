'use client'

import clsx from 'clsx'
import { type FC } from 'react'
import { useSwiper } from 'swiper/react'

import s from './SwiperButton.module.scss'

interface ISwiperButtonProps {
    className?: string
    side: 'prev' | 'next'
}

export const SwiperButton: FC<ISwiperButtonProps> = props => {
    const { className, side } = props
    const swiper = useSwiper()

    const onClick = () => {
        side === 'prev' ? swiper.slidePrev() : swiper.slideNext()
    }

    return (
        <div
            onClick={onClick}
            className={clsx(s.SwiperButton, className, 'no-select')}
        >
            <img
                alt='Arrow'
                src='icon/arrow.svg'
            />
        </div>
    )
}

SwiperButton.displayName = 'SwiperButton'
