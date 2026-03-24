import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import Link from 'next/link'

interface IEditBtn {
    id: string
}

export const EditBtn: React.FC<IEditBtn> = ({ id }) => {
    return (
        <Link href={`/CMS/newsEditor/` + id}>
            <EditToolTip />
        </Link>
    )
}
