'use client'

import { Container } from '@mui/material'

import { LazyImgList } from './components/ImgListLazy'
import style from './style.module.scss'
import { AnimationSlideBlock } from '@UI/AnimationSlideBlock'

export const Partners = () => {
    return (
        <Container
            component='section'
            className={`Partners ${style.Partners}`}
            maxWidth='lg'
        >
            <AnimationSlideBlock>
                <h2>Наши партнёры</h2>
            </AnimationSlideBlock>
            <AnimationSlideBlock>
                <h3>На этих предприятиях работают наши выпускники</h3>
            </AnimationSlideBlock>
            <LazyImgList />
        </Container>
    )
}
