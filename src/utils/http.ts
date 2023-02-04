export const getUrlWithParams = (url: string, queryParams: { [k in string]: any }) => {
    return `${url}?${Object.entries(queryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`
}
