import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

instance.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
    }
    return config
})

export { instance as axios }
