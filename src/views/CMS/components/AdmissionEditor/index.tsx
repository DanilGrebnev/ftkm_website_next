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
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import type { IAdmissionItem } from '@/entities/admission/model/server_actions/types/AdmissionItem'
import {
    getAdmissionSettings,
    saveAdmissionSettings,
} from '@/entities/admission/model/server_actions/admission'

import s from './AdmissionEditor.module.scss'

const emptyRow = (): IAdmissionItem => ({
    direction: '',
    budgetPlaces: 0,
    passingScore: '',
    additionalInformation: '',
})

export const AdmissionEditor = () => {
    const [items, setItems] = useState<IAdmissionItem[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState<string | null>(null)

    const load = useCallback(async () => {
        setLoading(true)
        setMessage(null)
        try {
            const { items: data } = await getAdmissionSettings()
            setItems(data.length ? data : [emptyRow()])
        } catch {
            setMessage('Не удалось загрузить данные')
            setItems([emptyRow()])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        load()
    }, [load])

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

    const handleSave = async () => {
        setSaving(true)
        setMessage(null)
        try {
            const result = await saveAdmissionSettings({ items })
            if (!result.ok) {
                setMessage(
                    result.error === 'Unauthorized'
                        ? 'Нет доступа'
                        : 'Ошибка сохранения'
                )
                return
            }
            setMessage('Сохранено')
            const { items: fresh } = await getAdmissionSettings()
            setItems(fresh.length ? fresh : [emptyRow()])
        } catch {
            setMessage('Ошибка сохранения')
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className={s.center}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <section className={s.section}>
            <Button
                component={Link}
                href='/CMS'
                variant='text'
                className={s.back}
            >
                ← Новости
            </Button>
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
                    disabled={saving}
                >
                    {saving ? 'Сохранение…' : 'Сохранить'}
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
