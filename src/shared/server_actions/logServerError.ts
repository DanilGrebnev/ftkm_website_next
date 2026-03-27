function formatError(error: unknown): string {
    if (error instanceof Error) {
        return error.stack ? `${error.message}\n${error.stack}` : error.message
    }
    return String(error)
}

export function logServerError(action: string, error: unknown): void {
    console.error(
        `[server] Ошибка при действии «${action}»: ${formatError(error)}`
    )
}

export async function withServerErrorLog<T>(
    action: string,
    fn: () => Promise<T>
): Promise<T> {
    try {
        return await fn()
    } catch (error) {
        logServerError(action, error)
        throw error
    }
}
