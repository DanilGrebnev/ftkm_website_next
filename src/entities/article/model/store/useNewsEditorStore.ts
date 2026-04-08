import { type IArticleFileDTO } from '@/shared/api/requests/articles'
import { create } from 'zustand'

interface NewsEditorState {
    title: string
    body: string
    video: string
    files: IArticleFileDTO[]
    loading: boolean
    loadingFile: boolean
    fetchNews: boolean
    showNewsResponseModal: boolean
    newsResponseModalContent: string

    setField: (name: string, value: string) => void
    setFiles: (files: IArticleFileDTO[]) => void
    setLoading: (v: boolean) => void
    setLoadingFile: (v: boolean) => void
    setFetchNews: (v: boolean) => void
    showModal: (content: string) => void
    closeModal: () => void
    clearFields: () => void
    loadFields: (fields: {
        title: string
        body: string
        video: string
        files: IArticleFileDTO[]
    }) => void
}

export const useNewsEditorStore = create<NewsEditorState>((set) => ({
    title: '',
    body: '',
    video: '',
    files: [],
    loading: false,
    loadingFile: false,
    fetchNews: false,
    showNewsResponseModal: false,
    newsResponseModalContent: '',

    setField: (name, value) => set({ [name]: value }),
    setFiles: (files) => set({ files }),
    setLoading: (v) => set({ loading: v }),
    setLoadingFile: (v) => set({ loadingFile: v }),
    setFetchNews: (v) => set({ fetchNews: v }),
    showModal: (content) =>
        set({ showNewsResponseModal: true, newsResponseModalContent: content }),
    closeModal: () =>
        set({ showNewsResponseModal: false, newsResponseModalContent: '' }),
    clearFields: () =>
        set({ title: '', body: '', video: '', files: [] }),
    loadFields: (fields) =>
        set({
            title: fields.title,
            body: fields.body,
            video: fields.video,
            files: fields.files,
        }),
}))
