import { Container } from '@mui/material'
import { employeesData } from '@/shared/constants/employees'

import { EmployeeItem } from './EmployeeItem'
import s from './s.module.scss'

export const Employees = () => (
    <Container
        component='section'
        maxWidth='xl'
    >
        <section className={s.employees}>
            {employeesData.map((props, i) => (
                <EmployeeItem
                    key={i}
                    {...props}
                />
            ))}
        </section>
    </Container>
)
