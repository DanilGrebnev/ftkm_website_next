'use client'

import { FC, ReactNode } from 'react'

import { ErrorBoundary } from './Providers'
import { FramerMotionProvider } from './Providers/FramerMotionProvider'
import { TanStackQueryProvider } from './Providers/TanStackQueryProvider'

interface AppProvidersProps {
    children: ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
    return (
        <ErrorBoundary>
            <FramerMotionProvider>
                <TanStackQueryProvider>
                    {children}
                </TanStackQueryProvider>
            </FramerMotionProvider>
        </ErrorBoundary>
    )
}
