'use server'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'
import { UserModel } from '@/entities/auth/api/models/user'
import { NODE_ENV, SECRET_JWT } from '@/shared/settings/settings'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET = new TextEncoder().encode(SECRET_JWT)
const COOKIE_NAME = 'session'
const EXPIRATION = '7d'

async function createToken(payload: { login: string }) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(EXPIRATION)
        .sign(SECRET)
}

export async function login(loginVal: string, password: string) {
    return withServerErrorLog('Вход в систему (аутентификация)', async () => {
        await dbConnect()

        const user = await UserModel.findOne({ login: loginVal }).exec()

        if (!user) {
            return { error: 'Пользователь не найден' }
        }

        if (password !== user.password) {
            return { error: 'Неверный пароль' }
        }

        const token = await createToken({ login: user.login })

        const cookieStore = await cookies()
        cookieStore.set(COOKIE_NAME, token, {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        })

        return { success: true }
    })
}

export async function getSession() {
    return withServerErrorLog('Получение сессии', async () => {
        const cookieStore = await cookies()
        const token = cookieStore.get(COOKIE_NAME)?.value

        if (!token) return null

        try {
            const { payload } = await jwtVerify(token, SECRET)
            return payload as { login: string }
        } catch {
            return null
        }
    })
}

export async function logout() {
    return withServerErrorLog('Выход из системы', async () => {
        const cookieStore = await cookies()
        cookieStore.delete(COOKIE_NAME)
        return { success: true }
    })
}