'use client'

import { LoadingCircle } from '@/shared/ui/LoadingCircle'
import { getNewsById } from '@/entities/article/model/server_actions/news'
import { uploadNewsFile } from '@/entities/article/model/server_actions/files'
import { useNewsEditorStore } from '@/entities/article/model/store/useNewsEditorStore'
import { AlertModal } from '@UI/AlertModal'
import { returnAlertType } from '@lib/returnAlertType'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { useParams, useRouter } from 'next/navigation'
import { ChangeEvent, useEffect } from 'react'

import { BodyInput } from './components/BodyInput'
import { FileList } from './components/FileList/FileList'
import { SendButton } from './components/SendButton'
import { TitleInput } from './components/TitleInput'
import { VideoLinkInput } from './components/VideoLinkInput/VideoLink'
import s from './style.module.scss'

const OneNewsEditor = () => {
    const params = useParams()
    const _id = params?._id as string | undefined
    const loading = useNewsEditorStore((s) => s.loading)
    const setLoading = useNewsEditorStore((s) => s.setLoading)
    const loadFields = useNewsEditorStore((s) => s.loadFields)
    const setFiles = useNewsEditorStore((s) => s.setFiles)
    const setLoadingFile = useNewsEditorStore((s) => s.setLoadingFile)
    const showNewsResponseModal = useNewsEditorStore((s) => s.showNewsResponseModal)
    const newsResponseModalContent = useNewsEditorStore((s) => s.newsResponseModalContent)
    const router = useRouter()

    useEffect(() => {
        if (!_id) return

        setLoading(true)
        getNewsById(_id)
            .then((data) => {
                if (!data) {
                    alert('Новость не найдена')
                    router.push('/CMS')
                    return
                }
                loadFields({
                    title: data.title,
                    body: data.body,
                    video: data.video,
                    files: data.files,
                })
            })
            .catch(() => {
                alert('Ошибка получения новости')
                router.push('/CMS')
            })
            .finally(() => setLoading(false))
    }, [_id, router, setLoading, loadFields])

    const textType = returnAlertType(newsResponseModalContent)

    if (loading) {
        return <LoadingCircle fullScreen={true} />
    }

    const onSubmitFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const { transform } = CyrillicToTranslit()
        if (!_id) return
        const file = e.target.files
        if (!file) return
        const formData = new FormData()
        const fileName = transform(file[0].name.toLocaleLowerCase(), '_')
        formData.append('file', file[0], fileName)

        setLoadingFile(true)
        try {
            const updatedFiles = await uploadNewsFile(_id, formData)
            setFiles(updatedFiles as any)
        } catch {
            alert('Ошибка загрузки файла')
        } finally {
            setLoadingFile(false)
        }
    }

    const acceptFiles =
        'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, image/*'

    return (
        <div className={s.EditorContainer}>
            <TitleInput />
            <BodyInput />
            <FileList />
            <VideoLinkInput />
            {_id && (
                <input
                    type='file'
                    name='file'
                    onChange={onSubmitFile}
                    accept={acceptFiles}
                />
            )}
            <SendButton />
            <AlertModal
                type={textType}
                title={newsResponseModalContent}
                showModal={showNewsResponseModal}
            />
        </div>
    )
}

export default OneNewsEditor
