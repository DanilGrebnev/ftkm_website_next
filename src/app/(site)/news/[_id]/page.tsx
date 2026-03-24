'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'
import { ErrorBoundary } from '@/app/Providers'

const OneNews = dynamic(
    () => import('@views/OneNews'),
    { loading: () => <LoadingCircle fullScreen /> }
)

export default function OneNewsPage() {
    return (
        <ErrorBoundary>
            <OneNews />
        </ErrorBoundary>
    )
}
