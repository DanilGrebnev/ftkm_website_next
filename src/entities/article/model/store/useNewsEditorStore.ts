import { INewsFiles } from '@/entities/article/model/server_actions/types/News'
import { create } from 'zustand'

interface NewsEditorState {
    title: string
    body: string
    video: string
    files: INewsFiles[]
    loading: boolean
    loadingFile: boolean
    fetchNews: boolean
    showNewsResponseModal: boolean
    newsResponseModalContent: string

    setField: (name: string, value: string) => void
    setFiles: (files: INewsFiles[]) => void
    setLoading: (v: boolean) => void
    setLoadingFile: (v: boolean) => void
    setFetchNews: (v: boolean) => void
    showModal: (content: string) => void
    closeModal: () => void
    clearFields: () => void
    loadFields: (fields: { title: string; body: string; video: string; files: INewsFiles[] }) => void
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
