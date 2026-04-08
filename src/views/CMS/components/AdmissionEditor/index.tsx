'use client'

import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import {
    useAdmissionSettingsQuery,
    useSaveAdmissionSettingsMutation,
    type IAdmissionItem,
} from '@/shared/api/requests/admission'

import s from './AdmissionEditor.module.scss'

const emptyRow = (): IAdmissionItem => ({
    direction: '',
    budgetPlaces: 0,
    passingScore: '',
    additionalInformation: '',
})

export const AdmissionEditor = () => {
    const [items, setItems] = useState<IAdmissionItem[]>([emptyRow()])
    const [message, setMessage] = useState<string | null>(null)

    const admissionQuery = useAdmissionSettingsQuery()
    const saveAdmissionMutation = useSaveAdmissionSettingsMutation()

    useEffect(() => {
        if (!admissionQuery.data) return

        const nextItems = admissionQuery.data.items.length
            ? admissionQuery.data.items
            : [emptyRow()]

        setItems(nextItems)
    }, [admissionQuery.data])

    useEffect(() => {
        if (!admissionQuery.isError) return

        setMessage('Не удалось загрузить данные')
        setItems([emptyRow()])
    }, [admissionQuery.isError])

    const updateRow = (
        index: number,
        patch: Partial<IAdmissionItem>
    ) => {
        setItems((prev) =>
            prev.map((row, i) => (i === index ? { ...row, ...patch } : row))
        )
    }

    const addRow = () => {
        setItems((prev) => [...prev, emptyRow()])
    }

    const removeRow = (index: number) => {
        setItems((prev) =>
            prev.length <= 1 ? [emptyRow()] : prev.filter((_, i) => i !== index)
        )
    }

    const handleSave = useCallback(async () => {
        setMessage(null)
        try {
            const result = await saveAdmissionMutation.mutateAsync({ items })
            if (!result.ok) {
                setMessage(
                    result.error === 'Unauthorized'
                        ? 'Нет доступа'
                        : 'Ошибка сохранения'
                )
                return
            }
            setMessage('Сохранено')
            const freshItems = result.items.length
                ? result.items
                : [emptyRow()]
            setItems(freshItems)
        } catch {
            setMessage('Ошибка сохранения')
        }
    }, [items, saveAdmissionMutation])

    if (admissionQuery.isLoading) {
        return (
            <div className={s.center}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <section className={s.section}>
            <Typography
                variant='h5'
                component='h1'
                className={s.title}
            >
                Поступление
            </Typography>
            <Typography
                variant='body2'
                color='text.secondary'
                className={s.subtitle}
            >
                Направления на главной странице. Пустые строки при сохранении
                будут отброшены.
            </Typography>

            <Stack spacing={3}>
                {items.map((row, index) => (
                    <Paper
                        key={index}
                        className={s.card}
                        elevation={2}
                    >
                        <Stack spacing={2}>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <Typography variant='subtitle1'>
                                    Направление {index + 1}
                                </Typography>
                                <IconButton
                                    type='button'
                                    aria-label='Удалить'
                                    onClick={() => removeRow(index)}
                                    size='small'
                                >
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </Stack>
                            <TextField
                                label='Направление (подзаголовок)'
                                value={row.direction}
                                onChange={(e) =>
                                    updateRow(index, {
                                        direction: e.target.value,
                                    })
                                }
                                fullWidth
                                required
                            />
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                            >
                                <TextField
                                    label='Бюджетных мест'
                                    type='number'
                                    value={Number.isFinite(row.budgetPlaces) ? row.budgetPlaces : ''}
                                    onChange={(e) => {
                                        const v = parseInt(e.target.value, 10)
                                        updateRow(index, {
                                            budgetPlaces: Number.isFinite(v)
                                                ? v
                                                : 0,
                                        })
                                    }}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label='Проходной балл'
                                    value={row.passingScore}
                                    onChange={(e) =>
                                        updateRow(index, {
                                            passingScore: e.target.value,
                                        })
                                    }
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <TextField
                                label='Доп. информация (необязательно)'
                                value={row.additionalInformation ?? ''}
                                onChange={(e) =>
                                    updateRow(index, {
                                        additionalInformation: e.target.value,
                                    })
                                }
                                fullWidth
                                multiline
                                minRows={2}
                            />
                        </Stack>
                    </Paper>
                ))}
            </Stack>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                className={s.actions}
            >
                <Button
                    type='button'
                    variant='outlined'
                    startIcon={<AddIcon />}
                    onClick={addRow}
                >
                    Добавить направление
                </Button>
                <Button
                    type='button'
                    variant='contained'
                    onClick={handleSave}
                    disabled={saveAdmissionMutation.isPending}
                >
                    {saveAdmissionMutation.isPending ? 'Сохранение…' : 'Сохранить'}
                </Button>
            </Stack>

            {message ? (
                <Typography
                    className={s.feedback}
                    color={
                        message === 'Сохранено'
                            ? 'success.main'
                            : 'error.main'
                    }
                >
                    {message}
                </Typography>
            ) : null}
        </section>
    )
}
