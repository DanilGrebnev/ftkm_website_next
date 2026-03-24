import { Container } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

import { GetSkeleton } from './GetSkeleton'
import s from './s.module.scss'

export const BigSkeleton = () => (
    <Container
        className={s.skeleton}
        maxWidth="xl"
    >
        <div className={s.header}>
            <div style={{ width: '150px' }}>
                <Skeleton
                    component="div"
                    variant="rectangular"
                    width={150}
                    height={150}
                />
            </div>
            {GetSkeleton({ amount: 4 })}
            {GetSkeleton({ amount: 4 })}
        </div>

        {GetSkeleton({ amount: 20 })}
    </Container>
)
