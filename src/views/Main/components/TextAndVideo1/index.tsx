import VideoComponent from '@components/VideoComponent'
import { Container } from '@mui/material'
import style from './style.module.scss'

export const TextAndVideo1 = () => {
    return (
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
    )
}
