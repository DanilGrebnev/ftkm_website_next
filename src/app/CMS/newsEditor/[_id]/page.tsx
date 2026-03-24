'use client'

import dynamic from 'next/dynamic'

import { ErrorBoundary } from '@/app/Providers'
import { WithAuth } from '@/entities/auth/ui/WithAuth'
import { LoadingCircle } from '@UI/LoadingCircle'

const OneNewsEditor = dynamic(
    () => import('@views/CMS/components/OneNewsEditor'),
    { loading: () => <LoadingCircle fullScreen /> }
)

export default function NewsEditorEditPage() {
    return (
        <ErrorBoundary>
            <WithAuth>
                <OneNewsEditor />
            </WithAuth>
        </ErrorBoundary>
    )
}
