export const globalVariables = {
    get limit() {
        return 8
    },
    get baseUrl() {
        return process.env.NEXT_PUBLIC_BASE_URL as string
    },
}
