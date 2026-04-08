import {
    useLogoutUserMutation,
    useUserSessionQuery,
} from '@/shared/api/requests/users'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

export type LoginPageSessionPhase = 'loading' | 'guest' | 'authed'

export function useLoginPageSession() {
    const router = useRouter()
    const sessionQuery = useUserSessionQuery()
    const logoutMutation = useLogoutUserMutation()

    const phase: LoginPageSessionPhase = useMemo(() => {
        if (sessionQuery.isLoading) {
            return 'loading'
        }

        if (sessionQuery.data) {
            return 'authed'
        }

        return 'guest'
    }, [sessionQuery.data, sessionQuery.isLoading])

    const doLogout = useCallback(async () => {
        try {
            await logoutMutation.mutateAsync()
        } finally {
            router.refresh()
        }
    }, [logoutMutation, router])

    return { phase, doLogout }
}
