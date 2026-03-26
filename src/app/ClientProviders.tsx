'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { FC, ReactNode } from 'react'

import { ErrorBoundary } from './Providers'
import { FramerMotionProvider } from './Providers/FramerMotionProvider'
import { TanStackQueryProvider } from './Providers/TanStackQueryProvider'

interface AppProvidersProps {
    children: ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
    return (
        <AppRouterCacheProvider options={{ prepend: true }}>
            <ErrorBoundary>
                <FramerMotionProvider>
                    <TanStackQueryProvider>
                        {children}
                    </TanStackQueryProvider>
                </FramerMotionProvider>
            </ErrorBoundary>
        </AppRouterCacheProvider>
    )
}
