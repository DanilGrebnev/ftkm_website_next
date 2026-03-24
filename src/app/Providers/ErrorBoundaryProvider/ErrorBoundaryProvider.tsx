import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children?: ReactNode
    fallback?: ReactNode
}

interface State {
    error: null | Error
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { error: null }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
        })

        console.log(errorInfo)
    }

    public render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>Произошла непредвиденная ошибка.</h2>
                    <button onClick={() => document.location.reload()}>
                        Обновить страницу
                    </button>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <p>{this.state.error.name}</p>
                        <br />
                        <p>{this.state.error.message}</p>
                    </details>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
