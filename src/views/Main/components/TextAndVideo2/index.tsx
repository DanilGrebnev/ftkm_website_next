'use client'

import { Container } from '@mui/material'
import clsx from 'clsx'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'
import { VideoList } from './VideoList/VideoList'
import s from './style.module.scss'

export const TextAndVideo2 = () => {
    return (
        <AnimationSlideBlock
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <Container
                className={clsx('Text-and-video-2', s.TextAndVideo2)}
                maxWidth='lg'
            >
                <h2 className={s.title}>
                    Все профессии хороши, но <b>Металлург</b> - звучит гордо
                </h2>
                <VideoList />
            </Container>
        </AnimationSlideBlock>
    )
}
