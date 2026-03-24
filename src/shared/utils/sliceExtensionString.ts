export const sliceExtensionInString = (string: string) => {
    const a = string.split('')
    const ext = []

    let value = 0

    for (let i = a.length; i >= 0; i--) {
        const el = a[i]
        if (el !== '.') {
            ext.push(el)
        } else {
            ext.push(el)
            value = a.length - i
            break
        }
    }

    const word = string.slice(0, -value)

    return word
}
