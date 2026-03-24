import { LoadingButton } from '@UI/LoadingButton'

import s from './s.module.scss'
import { useGetNewsQuery } from '@/entities/article/model/api/newsApiHooks'

export const ButtonContainer = () => {
    const { isFetching, fetchNextPage } = useGetNewsQuery()

    return (
        <div className={s.btnContainer}>
            {
                <LoadingButton
                    text='Загрузить ещё'
                    size='medium'
                    disabled={isFetching}
                    loading={isFetching}
                    onClick={fetchNextPage}
                />
            }
        </div>
    )
}
