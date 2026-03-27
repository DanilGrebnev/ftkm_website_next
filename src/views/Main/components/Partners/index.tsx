import { Container } from '@mui/material'

import { LazyImgList } from './components/ImgListLazy'
import style from './style.module.scss'

export const Partners = () => {
    return (
        <Container
            component='section'
            className={`Partners ${style.Partners}`}
            maxWidth='lg'
        >
            <h2>Наши партнёры</h2>
            <h3>На этих предприятиях работают наши выпускники</h3>
            <LazyImgList />
        </Container>
    )
}
