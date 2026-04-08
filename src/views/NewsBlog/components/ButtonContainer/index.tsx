import { LoadingButton } from '@UI/LoadingButton'

import {
    useGetArticlesPageQuery,
} from '@/shared/api/requests/articles'
import { globalVariables } from '@globalVariables'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { hasNextPage, isFetchingNextPage, fetchNextPage } = useGetArticlesPageQuery({
        skip: 0,
        limit: globalVariables.limit,
    })

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
