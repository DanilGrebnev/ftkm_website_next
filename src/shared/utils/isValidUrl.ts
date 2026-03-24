export const isValidUrl = (url: string) => {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i
    return objRE.test(url)
}
