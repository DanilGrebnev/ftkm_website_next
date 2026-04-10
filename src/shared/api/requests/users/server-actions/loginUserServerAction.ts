'use server'

import { cookies } from 'next/headers'
import { SignJWT } from 'jose'

import { dbConnect } from '@/shared/api/mongoClient'
import { withServerErrorLog } from '@/shared/lib/logServerError'
import { SECRET_JWT, NODE_ENV } from '@/shared/settings/settings'
import { UserModel } from '../schemas/UserModel'
import type { ILoginUserRequestDTO, ILoginUserResponseDTO } from '../DTO/LoginUserDTO'

const SECRET = new TextEncoder().encode(SECRET_JWT)
const COOKIE_NAME = 'session'
const EXPIRATION = '7d'

async function createToken(payload: { login: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(EXPIRATION)
    .sign(SECRET)
}

export async function loginUserServerAction(
  login: ILoginUserRequestDTO['login'],
  password: ILoginUserRequestDTO['password']
): Promise<ILoginUserResponseDTO> {
  return withServerErrorLog('Вход в систему (аутентификация)', async () => {
    console.log(`[auth] Попытка входа: login="${login}"`)

    await dbConnect()
    console.log('[auth] Подключение к БД — ОК')

    const user = await UserModel.findOne({ login }).exec()

    if (!user) {
      console.log(`[auth] Пользователь "${login}" не найден в коллекции users`)
      return { error: 'Пользователь не найден' }
    }

    console.log(`[auth] Пользователь найден: login="${user.login}"`)

    if (password !== user.password) {
      console.log(`[auth] Пароль не совпадает для "${login}"`)
      return { error: 'Неверный пароль' }
    }

    console.log(`[auth] Пароль верный, генерирую JWT...`)
    const token = await createToken({ login: user.login })

    const cookieStore = await cookies()
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    console.log(`[auth] Cookie "${COOKIE_NAME}" установлена (secure=${NODE_ENV === 'production'}, sameSite=lax)`)
    return { success: true }
  })
}
