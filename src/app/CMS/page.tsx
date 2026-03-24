'use client'

import { ErrorBoundary } from '@/app/Providers'
import { News } from '@views/CMS/components/News'

export default function CMSPage() {
    return (
        <ErrorBoundary>
            <News />
        </ErrorBoundary>
    )
}
