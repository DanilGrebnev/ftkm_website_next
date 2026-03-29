import { NEXT_PUBLIC_BASE_URL } from "@/shared/settings/settings";

export const globalVariables = {
    get limit() {
        return 8
    },
    get baseUrl() {
        return NEXT_PUBLIC_BASE_URL as string
    },
}
