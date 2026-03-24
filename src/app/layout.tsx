import type { Metadata } from 'next'

import '@/shared/styles/index.scss'
import '@/shared/styles/App.scss'
import { AppProviders } from './ClientProviders'

export const metadata: Metadata = {
    title: 'Кафедра «Машины и технология литейного производства» | ВолгГТУ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ru'>
            <body>
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    )
}
