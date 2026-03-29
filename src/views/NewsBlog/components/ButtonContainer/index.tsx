import { LoadingButton } from '@UI/LoadingButton'
import { useGetNewsQuery } from '@/entities/article/api/actions/newsApiHooks'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { hasNextPage, isFetchingNextPage, fetchNextPage } = useGetNewsQuery()

    const text = hasNextPage ? 'Загрузить ещё' : 'Это все новости'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size='medium'
                disabled={!hasNextPage || isFetchingNextPage}
                loading={isFetchingNextPage}
                onClick={() => fetchNextPage()}
            />
        </div>
    )
}
