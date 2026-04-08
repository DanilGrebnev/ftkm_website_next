'use client'

import { formatNewsCreatedDate } from '@/entities/article/model/utils/formatNewsCreatedDate'
import { NewsCardSkeleton } from '@/entities/article/ui/NewsCardSkeleton/NewsCardSekelton'
import { TextareaView } from '@/shared/ui/ArticleBodyPreview/ArticleBodyPreview'
import { useSetDocumentTitle } from '@/shared/hooks/useSetDocumentTitle'
import { getArticleByIdServerAction, type IArticleDTO } from '@/shared/api/requests/articles'
import { Button, Container } from '@mui/material'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import { FileList } from './components/FileList/FileList'
import { Vide } from './components/Video/Vide'
import s from './style.module.scss'

const OneNews = () => {
    const params = useParams()
    const _id = params?._id as string | undefined
    const [news, setNews] = useState<IArticleDTO>()
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useSetDocumentTitle({ title: news?.title })

    useEffect(() => {
        if (!_id) return
        setLoading(true)
        getArticleByIdServerAction(_id)
            .then((response) => {
                if (response.article) {
                    setNews(response.article)
                } else {
                    router.push('/news')
                }
            })
            .catch(() => {
                router.push('/news')
            })
            .finally(() => setLoading(false))
    }, [router, _id])

    if (loading) {
        return (
            <Container
                maxWidth='xl'
                component='section'
            >
                <NewsCardSkeleton />
            </Container>
        )
    }

    return (
        <Container
            component='section'
            className={s.news_container}
            maxWidth='xl'
            id='One-News-block'
        >
            <p className={s.title}>{news?.title}</p>
            <div className={s['news-date']}>
                {formatNewsCreatedDate(news?.createdDate)}
            </div>
            <TextareaView className={s['news-body']}>{news?.body}</TextareaView>
            <Vide src={news?.video} />
            <FileList fileList={news?.files} />
            <Link
                className={s.back}
                href='/news'
            >
                <Button
                    className={s.btn}
                    variant='text'
                >
                    К новостям
                </Button>
            </Link>
        </Container>
    )
}

export default OneNews
