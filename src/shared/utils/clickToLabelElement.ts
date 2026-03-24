export const clickToLabelElement = (ref: React.RefObject<HTMLInputElement>) => {
    //Имитирует нажатие на элемент
    const inpFile = ref?.current as HTMLInputElement

    inpFile.click()
}
