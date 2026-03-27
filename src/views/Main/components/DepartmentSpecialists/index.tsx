import { Container } from '@mui/material'

import { data } from './data'
import s from './style.module.scss'

export const DepartmentSpecialists = () => {
    return (
        <Container
            component='section'
            id='Cooperation'
            className={`DepartmentSpecialists ${s.container}`}
            maxWidth='xl'
        >
            <h1>Специалисты кафедры</h1>
            <Container>
                <h3>
                    Высококвалифицированные специалисты кафедры МиТЛП
                    обладают большим опытом и помогут вам решить вопросы:
                </h3>
                <ol>
                    {data.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ol>
            </Container>
        </Container>
    )
}
