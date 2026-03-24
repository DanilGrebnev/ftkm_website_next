'use client'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'

import s from './alert.module.scss'
import { IAlertDialog } from './interface'

const Transition = React.forwardRef(TransitionFn)

export const AlertDialog: React.FC<IAlertDialog> = ({
    open,
    dialogTitle,
    dialogContent,
    handleClose,
    onClickAction,
    button1Text,
    button2Text,
}) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
        >
            <DialogTitle className={s.title}>{dialogTitle}</DialogTitle>
            {dialogContent && (
                <DialogContent className={s['dialog-subtitle']}>
                    <DialogContentText id='alert-dialog-slide-description'>
                        {dialogContent}
                    </DialogContentText>
                </DialogContent>
            )}
            <DialogActions className={s['dialog-actions']}>
                <Button onClick={handleClose}>{button1Text || 'Отмена'}</Button>
                <Button
                    color='error'
                    onClick={() => {
                        onClickAction()
                        handleClose()
                    }}
                >
                    {button2Text || 'Удалить'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

function TransitionFn(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return (
        <Slide
            direction='up'
            ref={ref}
            {...props}
        />
    )
}
