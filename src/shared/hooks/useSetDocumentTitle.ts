import React from 'react'

interface IDocumentTitle {
    title?: string
    // description?: string
}
/**
 * Хук устанавливает заголовок
 * страницы при рендере
 */
export const useSetDocumentTitle = ({ title }: IDocumentTitle) => {
    React.useEffect(() => {
        if (!title) return
        document.title = title
    }, [title])
}
