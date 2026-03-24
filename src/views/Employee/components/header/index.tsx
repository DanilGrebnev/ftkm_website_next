import { TextContent } from './TextContent'
import s from './s.module.scss'

export const Header = () => {
    return (
        <>
            <h1 className={s.name}>Кидалов Николай Алексеевич</h1>
            <div className={s.header}>
                <img
                    alt='изображение'
                    src='images/kidalov.webp'
                />
                <div className={s.description}>
                    <TextContent
                        leftText='Учёное звание'
                        rightText='профессор'
                        className={s.a}
                    />
                    <TextContent
                        leftText='Учёная степень'
                        rightText='доктор технических наук (технические науки)'
                        className={s.b}
                    />
                    <TextContent
                        leftText='Кафедра'
                        rightText='"Машины и технология литейного производства", заведующий кафедрой'
                        className={s.c}
                    />
                    <TextContent
                        leftText='Комната'
                        rightText='ГУК-130а'
                        className={s.d}
                    />
                    <TextContent
                        leftText='Телефон'
                        rightText='(8442) 23-99-41'
                        className={s.i}
                    />
                    <TextContent
                        leftText='Эл.почта'
                        rightText='nich@vstu.ru'
                        className={s.f}
                    />
                </div>
            </div>
        </>
    )
}
