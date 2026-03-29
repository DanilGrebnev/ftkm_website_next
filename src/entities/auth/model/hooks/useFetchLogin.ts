import { login as loginAction } from '@/entities/auth/api/actions/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Payload = {
    login: string
    password: string
}

export const useFetchLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()

    const fetchLogin = async (payload: Payload) => {
        setLoading(true)
        setError(false)

        try {
            const result = await loginAction(payload.login, payload.password)

            if (result.error) {
                setError(true)
                return
            }

            router.push('/CMS')
        } catch {
            setError(true)
        } finally {
            setLoading(false)
            setTimeout(setError, 5000, false)
        }
    }

    return { isLoading, fetchLogin, error }
}
