/**
 * Функция заменяет в текущем url адресе
 * login на cms и переадресует на страницу
 * CMS
 */
export const redirectToCmsPage = () => {
    const url = window.location.href
    window.location.href = url.replace('login', 'cms')
}
