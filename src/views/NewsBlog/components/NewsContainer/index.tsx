import { NewsCardItem } from '@/entities/article/ui/NewsCardItem'
import { Grid } from '@components/Grid'
import clsx from 'clsx'

import {
    useGetArticlesPageQuery,
    type IArticleDTO,
} from '@/shared/api/requests/articles'
import { globalVariables } from '@globalVariables'

import s from './s.module.scss'

// TODO: Компонент с новостями страницы новостей
export const NewsContainer = () => {
    const { data } = useGetArticlesPageQuery({
        skip: 0,
        limit: globalVariables.limit,
    })

    return (
        <Grid className={clsx(s['news-blog'])}>
            {data?.map((news: IArticleDTO) => (
                <NewsCardItem
                    key={news._id}
                    {...news}
                />
            ))}
        </Grid>
    )
}
