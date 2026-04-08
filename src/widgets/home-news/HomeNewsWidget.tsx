'use client'

import {
  getLastArticlesServerAction,
  type IArticleDTO,
} from '@/shared/api/requests/articles'
import { NewsBlockClient } from '@/views/Main/components/NewsBlock/NewsBlockClient'
import { useEffect, useState } from 'react'

import { NewsHomeDegraded } from './NewsHomeDegraded'

const MAIN_NEWS_PREVIEW_LIMIT = 8

type Phase = 'loading' | 'ok' | 'degraded'

export function HomeNewsWidget() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [items, setItems] = useState<IArticleDTO[]>([])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const result = await getLastArticlesServerAction(MAIN_NEWS_PREVIEW_LIMIT)
        if (cancelled) return
        const data = result.data
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
