import Video from '@components/VideoComponent'

import s from '../style.module.scss'

const VideoList = () => {
    return (
        <>
            <Video
                title='Металлургия - это красиво!'
                src='https://www.youtube.com/embed/KpnW1E0mmgc?si=179nI_FPWPNvCQYA'
                type='YouTube'
                preload='metadata'
                className={s.video1}
            />
            <Video
                type='YouTube'
                title='Металлургия - это красиво!'
                src='https://www.youtube.com/embed/4WiUXo5x2eI'
                className={s.video2}
                poster='images/poseter1.webp'
            />
            <Video
                src='https://www.youtube.com/embed/qYMFJE3CQi0?si=8Tkqi3b0ERUetVB2'
                type='YouTube'
                title='РМ Рейл ВКМ Сталь'
                preload='metadata'
                className={s.video3}
            />
        </>
    )
}

export { VideoList }
