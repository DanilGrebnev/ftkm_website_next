'use server'

import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

import { withServerErrorLog } from '@/shared/lib/logServerError'
import { SECRET_JWT } from '@/shared/settings/settings'
import type { IGetSessionResponseDTO } from '../DTO/SessionUserDTO'

const SECRET = new TextEncoder().encode(SECRET_JWT)
const COOKIE_NAME = 'session'

export async function getSessionServerAction(): Promise<IGetSessionResponseDTO | null> {
  return withServerErrorLog('Получение сессии', async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get(COOKIE_NAME)?.value

    if (!token) return null

    try {
      const { payload } = await jwtVerify(token, SECRET)
      if (typeof payload.login !== 'string') {
        return null
      }
      return { login: payload.login }
    } catch {
      return null
    }
  })
}
