import { Swiper } from './components/Swiper/Swiper'
import s from './s.module.scss'

export const SwiperEquipment = () => {
    return (
        <section className={s.SwiperEquipment}>
            <h2 className={s.title}>Оборудование кафедры</h2>
            <Swiper />
        </section>
    )
}
