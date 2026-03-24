'use client'

import dynamic from 'next/dynamic'

import { LoadingCircle } from '@UI/LoadingCircle'
import { ErrorBoundary } from '@/app/Providers'

const NewsBlog = dynamic(
    () => import('@views/NewsBlog'),
    { loading: () => <LoadingCircle fullScreen /> }
)

export default function NewsPage() {
    return (
        <ErrorBoundary>
            <NewsBlog />
        </ErrorBoundary>
    )
}
