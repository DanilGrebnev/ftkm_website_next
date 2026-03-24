import { List } from '@components/List'
import cn from 'classnames'
import { data } from '@/shared/constants/Kidalov.employee'

import { Description } from './components/Description'
import { Header } from './components/header'
import s from './s.module.scss'

export const Employee = () => {
    return (
        <section className={cn('Employee', s.employee)}>
            <Header />

            {data.map((props, i) => {
                return (
                    <List
                        key={i}
                        {...props}
                    />
                )
            })}

            <h3 className={s.biografy}>Биография</h3>

            <Description />
        </section>
    )
}
