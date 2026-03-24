import { NewsCardItem } from '@/entities/article/ui/NewsCardItem'
import { Grid } from '@components/Grid'
import clsx from 'clsx'

import s from './s.module.scss'
import { useGetNewsQuery } from '@/entities/article/model/api/newsApiHooks'

// TODO: Компонент с новостями страницы новостей
export const NewsContainer = () => {
    const { data } = useGetNewsQuery()

    return (
        <Grid className={clsx(s['news-blog'])}>
            {data?.map((news) => (
                <NewsCardItem
                    key={news._id}
                    {...news}
                />
            ))}
        </Grid>
    )
}
