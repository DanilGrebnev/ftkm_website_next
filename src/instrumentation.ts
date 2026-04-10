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

            const result = await UserModel.findOneAndUpdate(
                { login },
                { login, password },
                { upsert: true, new: true }
            ).exec()

            if (result) {
                console.log(`[seed] Admin user "${login}" synced (upsert)`)
            }
        } catch (err) {
            logServerError('Сидирование администратора при старте', err)
        }
    }
}