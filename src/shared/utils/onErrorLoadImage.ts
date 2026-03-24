import { SyntheticEvent } from 'react'

export const onErrorLoadImage = (
    errorEvent: SyntheticEvent<HTMLImageElement, Event>
) => {
    const target = errorEvent.target as HTMLImageElement
    target.src = 'images/Logo_ФТКМ.png'
}
