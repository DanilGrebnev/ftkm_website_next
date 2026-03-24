import { API_RESPONSES } from '@API_RESPONSES'

export const returnAlertType = (content: string) => {
    return content === API_RESPONSES.NEWS_SEND_ERROR ||
        content === API_RESPONSES.NEWS_EDIT_ERROR
        ? 'error'
        : 'success'
}
