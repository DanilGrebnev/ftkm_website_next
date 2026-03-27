/** Читабельная дата публикации вместо сырого timestamp в UI. */
export function formatNewsCreatedDate(createdDate: number | undefined): string {
    if (createdDate == null || !Number.isFinite(createdDate)) {
        return ''
    }
    try {
        return new Date(createdDate).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    } catch {
        return ''
    }
}
