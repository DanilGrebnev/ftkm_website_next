import ExcelIcon from '@/assets/excel-icon.webp'
import FolderIcon from '@/assets/folder.webp'
import ImageIcon from '@/assets/image-icon.webp'
import PDFIcon from '@/assets/pdf-icon.webp'
import WordIcon from '@/assets/word-icon.webp'

const fileExtension = {
    excel: [
        '.xlsx',
        '.xlsm',
        '.xlsb',
        '.xltx',
        '.xltm',
        '.xls',
        '.xlt',
        '.xml',
    ],
    word: ['.docx', '.doc', '.dot', '.dotx', '.rtf', '.docm'],
    pdf: ['.pdf', '.djvu'],
    image: ['.png', '.jpg', '.jpeg', '.svg'],
}

export const selectFileExtensionIcon = (extension: string) => {
    if (fileExtension.word.includes(extension)) {
        return WordIcon
    }
    if (fileExtension.excel.includes(extension)) {
        return ExcelIcon
    }
    if (fileExtension.pdf.includes(extension)) {
        return PDFIcon
    }
    if (fileExtension.image.includes(extension)) {
        return ImageIcon
    }

    return FolderIcon
}
