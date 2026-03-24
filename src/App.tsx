'use client'

import { Header } from '@/shared/ui/Header'
import { FC, ReactNode } from 'react'

interface AppProps {
    children: ReactNode
}

export const App: FC<AppProps> = ({ children }) => (
    <div className='App'>
        <Header />
        {children}
    </div>
)
