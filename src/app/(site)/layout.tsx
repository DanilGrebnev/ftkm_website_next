'use client'

import { App } from '@/App'

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <App>{children}</App>
}
