'use server'

import { dbConnect } from '@/shared/server_actions/db'
import {
    logServerError,
    withServerErrorLog,
} from '@/shared/server_actions/logServerError'
import {
    ADMISSION_SETTINGS_ID,
    AdmissionSettingsModel,
} from '@/entities/admission/model/server_actions/models/AdmissionSettings'
import { getSession } from '@/entities/auth/model/server_actions/auth'
import type { IAdmissionItem } from '@/entities/admission/model/server_actions/types/AdmissionItem'
import { revalidatePath } from 'next/cache'

function serializeItems(doc: { items: IAdmissionItem[] } | null): IAdmissionItem[] {
    if (!doc?.items?.length) return []
    return JSON.parse(JSON.stringify(doc.items))
}

export async function getAdmissionSettings(): Promise<{
    items: IAdmissionItem[]
}> {
    return withServerErrorLog('Получение настроек поступления', async () => {
        await dbConnect()

        const doc = await AdmissionSettingsModel.findById(ADMISSION_SETTINGS_ID)
            .lean()
            .exec()

        if (!doc) {
            return { items: [] }
        }

        return { items: serializeItems(doc) }
    })
}

/** Публичная главная: при ошибке БД не бросает исключение. */
export async function getAdmissionSettingsForPublicPage(): Promise<{
    items: IAdmissionItem[]
}> {
    try {
        await dbConnect()

        const doc = await AdmissionSettingsModel.findById(ADMISSION_SETTINGS_ID)
            .lean()
            .exec()

        if (!doc) {
            return { items: [] }
        }

        return { items: serializeItems(doc) }
    } catch (error) {
        logServerError('Получение настроек поступления (главная, публично)', error)
        return { items: [] }
    }
}

function normalizeItems(raw: unknown): IAdmissionItem[] {
    if (!Array.isArray(raw)) return []

    const items: IAdmissionItem[] = []

    for (const row of raw) {
        if (!row || typeof row !== 'object') continue
        const r = row as Record<string, unknown>
        const direction =
            typeof r.direction === 'string' ? r.direction.trim() : ''
        const budgetRaw = r.budgetPlaces
        const budgetPlaces =
            typeof budgetRaw === 'number' && Number.isFinite(budgetRaw)
                ? budgetRaw
                : typeof budgetRaw === 'string'
                  ? parseInt(budgetRaw, 10)
                  : NaN
        const passingScore =
            typeof r.passingScore === 'string' ? r.passingScore.trim() : ''
        const additionalInformation =
            typeof r.additionalInformation === 'string'
                ? r.additionalInformation.trim()
                : ''

        if (!direction || !Number.isFinite(budgetPlaces) || !passingScore) {
            continue
        }

        items.push({
            direction,
            budgetPlaces,
            passingScore,
            ...(additionalInformation
                ? { additionalInformation }
                : {}),
        })
    }

    return items
}

export async function saveAdmissionSettings(payload: {
    items: unknown
}): Promise<{ ok: true } | { ok: false; error: string }> {
    return withServerErrorLog('Сохранение настроек поступления', async () => {
        const session = await getSession()
        if (!session) {
            return { ok: false, error: 'Unauthorized' }
        }

        const items = normalizeItems(payload.items)

        await dbConnect()

        await AdmissionSettingsModel.findByIdAndUpdate(
            ADMISSION_SETTINGS_ID,
            { $set: { items } },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        ).exec()

        revalidatePath('/')
        revalidatePath('/CMS')
        revalidatePath('/CMS/admission')

        return { ok: true }
    })
}
