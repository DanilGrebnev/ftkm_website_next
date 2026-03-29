'use client'

import { getLastNews } from '@/entities/article/api/actions/news'
import type { INewsItem } from '@/entities/article/api/types/News'
import { NewsBlockClient } from '@/views/Main/components/NewsBlock/NewsBlockClient'
import { useEffect, useState } from 'react'

import { NewsHomeDegraded } from './NewsHomeDegraded'

const MAIN_NEWS_PREVIEW_LIMIT = 8

type Phase = 'loading' | 'ok' | 'degraded'

export function HomeNewsWidget() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [items, setItems] = useState<INewsItem[]>([])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const result = await getLastNews(MAIN_NEWS_PREVIEW_LIMIT)
        if (cancelled) return
        const data = result.data as INewsItem[]
        if (!data?.length) {
          setPhase('degraded')
          return
        }
        setItems(data)
        setPhase('ok')
      } catch {
        if (!cancelled) setPhase('degraded')
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  if (phase === 'degraded') {
    return <NewsHomeDegraded />
  }

  return <NewsBlockClient lastNews={phase === 'loading' ? [] : items} />
}
