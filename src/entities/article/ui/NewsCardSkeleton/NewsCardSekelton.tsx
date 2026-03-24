import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const NewsCardSkeleton = React.memo((props: { loading?: boolean }) => {
    return (
        <Container maxWidth='xl'>
            <Container maxWidth='lg'>
                <Typography variant='h4'>
                    <Skeleton variant='text' />
                    <Container maxWidth='sm'>
                        <Skeleton variant='text' />
                    </Container>
                </Typography>
            </Container>
            <br />
            <Typography variant='subtitle1'>
                <Skeleton
                    sx={{ maxWidth: '150px' }}
                    variant='text'
                />
            </Typography>
            <br />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
        </Container>
    )
})

export default NewsCardSkeleton
