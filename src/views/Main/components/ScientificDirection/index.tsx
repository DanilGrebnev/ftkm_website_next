import { List } from '@components/List'
import { Container } from '@mui/material'

import { data } from './data'
import s from './s.module.scss'

export const ScientificDirection = () => {
    return (
        <Container
            component='section'
            maxWidth='lg'
            id='ScientificDirection'
            className={s.ScientificDirection}
        >
            <h2>Научные направления</h2>
            {data.map(({ title, list }, i) => (
                <List
                    key={i}
                    title={title}
                    list={list}
                />
            ))}

            <p className={s.results}>
                Результаты реализации научных и технологических разработок
                специалистов литейной кафедры ВолгГТУ за последние 10 лет
                внедрены на АО "ВТЗ", ОАО "ДЭМЗ", ОАО "ЗКО", ОАО
                "Алтайвагонзавод", ОАО "Волгограднефетмаш", ООО "Forte
                Metals" и других. Каждый год специалисты кафедры участвуют в
                модернизации производства на предприятиях Российской
                Федерации.
            </p>
        </Container>
    )
}
