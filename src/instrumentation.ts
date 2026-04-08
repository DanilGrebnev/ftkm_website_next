import {
    ADMIN_LOGIN,
    ADMIN_PASSWORD,
    NEXT_RUNTIME,
} from '@/shared/settings/settings'
import { logServerError } from '@/shared/lib/logServerError'

export async function register() {
    if (NEXT_RUNTIME === 'nodejs') {
        const login = ADMIN_LOGIN
        const password = ADMIN_PASSWORD

        if (!login || !password) {
            console.log('[seed] ADMIN_LOGIN or ADMIN_PASSWORD not set, skipping user seed')
            return
        }

        try {
            const { dbConnect } = await import('@/shared/api/mongoClient')
            const { UserModel } = await import('@/shared/api/requests/users/schemas/UserModel')

            await dbConnect()

            const existing = await UserModel.findOne({ login }).exec()

            if (existing) {
                console.log(`[seed] User "${login}" already exists, skipping`)
                return
            }

            await UserModel.deleteMany({})
            await UserModel.create({ login, password })
            console.log(`[seed] Created admin user "${login}"`)
        } catch (err) {
            logServerError('Сидирование администратора при старте', err)
        }
    }
}