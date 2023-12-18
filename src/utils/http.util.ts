// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUrlWithParams = (url: string, queryParams: { [k in string]: any }) => {
  return `${url}?${encodeURI(
    Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )}`
}
