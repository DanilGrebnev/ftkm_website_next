import { Grid } from '@/shared/ui/Grid'
import s from './s.module.scss'

import { people } from './data'
import { People } from './People'

export const Graduates = () => {
    return (
        <Grid className={s.graduates}>
            <h2 className={s['main-title']}>Наши выпускники</h2>
            <Grid className={s['graduates-wrapper']}>
                {people.map((data, i) => (
                    <People
                        key={i}
                        {...data}
                    />
                ))}
            </Grid>
        </Grid>
    )
}
