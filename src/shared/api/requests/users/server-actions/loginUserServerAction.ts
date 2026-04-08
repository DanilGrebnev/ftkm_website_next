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
    await dbConnect()

    const user = await UserModel.findOne({ login }).exec()

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
