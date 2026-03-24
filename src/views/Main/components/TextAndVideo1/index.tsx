'use client'

import VideoComponent from '@components/VideoComponent'
import { Container } from '@mui/material'
import style from './style.module.scss'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'

export const TextAndVideo1 = () => {
    return (
        <AnimationSlideBlock
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <Container
                component='section'
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                }}
                className={`Text-and-video-1 ${style.TextAndVideo1}`}
            >
                <p>
                    <strong>
                        <q>
                            Сегодня работа сотен и тысяч горняков и металлургов
                            во многом определяют динамику российской экономики
                        </q>
                        ,
                    </strong>
                    - сказал Владимир Владимирович Путин о металлургии.
                </p>
                <VideoComponent
                    src={'/videos/metallurgy-putin.mp4'}
                    preload='metadata'
                    controls
                />
            </Container>
        </AnimationSlideBlock>
    )
}
