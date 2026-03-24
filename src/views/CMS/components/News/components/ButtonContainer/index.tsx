'use client'

import { LoadingButton } from '@UI/LoadingButton'
import { useNewsListStore } from '@/entities/article/model/store/useNewsListStore'
import { useGetNews } from '@/entities/article/model/hooks/useGetNews'
import { useMoreNewsComplete } from '@/entities/article/model/hooks/useMoreNewsComplete'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { getNews } = useGetNews()
    const { isCompleteMoreNews } = useMoreNewsComplete()
    const loading = useNewsListStore((s) => s.loading)

    const text = isCompleteMoreNews ? 'новости кончались' : 'загрузить ещё'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size='medium'
                disabled={loading || isCompleteMoreNews}
                loading={loading}
                onClick={() => getNews()}
            />
        </div>
    )
}
