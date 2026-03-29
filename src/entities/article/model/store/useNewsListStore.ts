import { INewsItem } from '@/entities/article/api/types/News'
import { create } from 'zustand'

interface NewsListState {
    news: INewsItem[]
    documentsCount: number
    skip: number
    loading: boolean

    setNews: (news: INewsItem[], totalCount: number) => void
    appendNews: (news: INewsItem[], totalCount: number) => void
    setLoading: (v: boolean) => void
    incrementSkip: (amount: number) => void
    clearList: () => void
    toggleDeleteLoading: (id: string) => void
}

export const useNewsListStore = create<NewsListState>((set, get) => ({
    news: [],
    documentsCount: 0,
    skip: 0,
    loading: false,

    setNews: (news, totalCount) =>
        set({ news, documentsCount: totalCount }),
    appendNews: (newItems, totalCount) =>
        set((state) => {
            const existingIds = new Set(state.news.map((n) => n._id))
            const unique = newItems.filter((n) => !existingIds.has(n._id))
            return {
                news: [...state.news, ...unique],
                documentsCount: totalCount,
            }
        }),
    setLoading: (v) => set({ loading: v }),
    incrementSkip: (amount) =>
        set((state) => ({ skip: state.skip + amount })),
    clearList: () =>
        set({ news: [], documentsCount: 0, skip: 0 }),
    toggleDeleteLoading: (id) =>
        set((state) => ({
            news: state.news.map((n) =>
                n._id === id
                    ? { ...n, isDeleteLoading: !n.isDeleteLoading }
                    : n
            ),
        })),
}))
