export const getUrlWithParams = (url: string, queryParams: { [k in string]: any }) => {
    return `${url}?${encodeURI(
        Object.entries(queryParams)
            .map(([key, value]) => `${key}=${value}`)
            .join('&'),
    )}`
}
