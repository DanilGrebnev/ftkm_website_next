import { Skeleton, Typography } from '@mui/material'
import React from 'react'

interface IGetSkeleton {
    amount?: number
    component?: React.ElementType
}

export const GetSkeleton: React.FC<IGetSkeleton> = ({
    amount = 5,
    component = 'section',
}) => (
    <Typography
        component={component}
        variant="body1"
    >
        {[...new Array(amount)].map((_, i) => (
            <Skeleton key={i} />
        ))}
    </Typography>
)
