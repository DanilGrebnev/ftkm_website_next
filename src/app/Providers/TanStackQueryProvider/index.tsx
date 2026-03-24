import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const TanStackQueryProvider: FC<{ children: ReactNode }> = ({
    children,
}) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
