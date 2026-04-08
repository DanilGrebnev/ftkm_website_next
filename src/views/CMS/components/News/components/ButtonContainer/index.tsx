'use client'

import { LoadingButton } from '@UI/LoadingButton'

import s from './s.module.scss'

interface ButtonContainerProps {
    hasNextPage?: boolean
    isFetchingNextPage: boolean
    isInitialLoading: boolean
    onLoadMore: () => void
}

export const ButtonContainer = ({
    hasNextPage,
    isFetchingNextPage,
    isInitialLoading,
    onLoadMore,
}: ButtonContainerProps) => {
    const text = hasNextPage ? 'Загрузить ещё' : 'Это все новости'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size='medium'
                disabled={isInitialLoading || !hasNextPage || isFetchingNextPage}
                loading={isFetchingNextPage}
                onClick={onLoadMore}
            />
        </div>
    )
}
