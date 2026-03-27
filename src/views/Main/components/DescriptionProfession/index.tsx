import { ImgComponent } from '@components/ImgComponent'
import { Container } from '@mui/material'
import s from './s.module.scss'

export const DescriptionProfession = () => {
    return (
        <Container
            maxWidth='xl'
            id='Description_Profession'
        >
            <div className={s.descriptionContainer}>
                <p className={s.description}>
                    Литейное производство – сердце машиностроительной
                    отрасли, от биения которого зависит не только качество
                    выпускаемой продукции, но и конкурентоспособность
                    отечественных предприятий в целом. Поэтому подготовка
                    высококвалифицированных специалистов – литейщиков,
                    способных вывести промышленность на новый уровень за
                    счет применения инструментария в виде цифровых и
                    информационных технологий, является одной из
                    приоритетных задач развития страны. Завершив обучение по
                    профилю подготовки «Машины и технология литейного
                    производства», ты овладеешь всеми необходимыми навыками
                    для решения производственных задач, а значит станешь
                    востребованным специалистом на рынке труда!
                </p>

                <ImgComponent
                    alt='ВолгГТУ сайт'
                    src={'/images/description/1.webp'}
                />

                <ImgComponent
                    alt='ВолгГТУ сайт'
                    src={'/images/description/2.webp'}
                />
            </div>
        </Container>
    )
}
