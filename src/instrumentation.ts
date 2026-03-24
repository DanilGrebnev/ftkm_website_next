export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { dbConnect } = await import('@/shared/server_actions/db')
        const { UserModel } = await import(
            '@/entities/auth/model/server_actions/models/User'
        )

        const login = process.env.ADMIN_LOGIN
        const password = process.env.ADMIN_PASSWORD

        if (!login || !password) {
            console.log('[seed] ADMIN_LOGIN or ADMIN_PASSWORD not set, skipping user seed')
            return
        }

        await dbConnect()

        const existing = await UserModel.findOne({ login }).exec()

        if (existing) {
            console.log(`[seed] User "${login}" already exists, skipping`)
            return
        }

        await UserModel.deleteMany({})
        await UserModel.create({ login, password })
        console.log(`[seed] Created admin user "${login}"`)
    }
}
