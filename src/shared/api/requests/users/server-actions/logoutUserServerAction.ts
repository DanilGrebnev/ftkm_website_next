'use server'

import { cookies } from 'next/headers'

import { withServerErrorLog } from '@/shared/lib/logServerError'
import type { ILogoutUserResponseDTO } from '../DTO/LogoutUserDTO'

const COOKIE_NAME = 'session'

export async function logoutUserServerAction(): Promise<ILogoutUserResponseDTO> {
  return withServerErrorLog('Выход из системы', async () => {
    const cookieStore = await cookies()
    cookieStore.delete(COOKIE_NAME)
    return { success: true }
  })
}
