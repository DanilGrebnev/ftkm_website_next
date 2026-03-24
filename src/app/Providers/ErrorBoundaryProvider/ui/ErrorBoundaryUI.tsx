import s from './ErrorBoundaryUI.module.scss'

export const ErrorBoundaryUI = () => {
    return (
        <div className={s.ErrorBoundaryUI}>
            <h1>Произошла непредвиденная ошибка</h1>
            <button
                onClick={() => {
                    document.location.reload()
                }}
            >
                Обновить страницу
            </button>
        </div>
    )
}

ErrorBoundaryUI.displayName = 'ErrorBoundaryUI'
