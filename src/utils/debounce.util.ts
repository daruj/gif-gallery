/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null

  return function (this: any, ...args: any[]) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
