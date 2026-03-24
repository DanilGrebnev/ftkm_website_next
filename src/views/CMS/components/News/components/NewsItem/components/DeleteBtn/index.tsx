import { LoadingCircle } from '@UI/LoadingCircle'
import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'

interface IDeleteBtn {
    onClick: () => void
    isLoading?: boolean
}

export const DeleteBtn: React.FC<IDeleteBtn> = ({ onClick, isLoading }) => {
    return isLoading ? (
        <LoadingCircle circularSize={20} />
    ) : (
        <DeleteToolTip onClick={onClick} />
    )
}
