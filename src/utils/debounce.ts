export default function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: NodeJS.Timeout | null

    return function (this: any, ...args: any[]) {
        const context = this

        clearTimeout(timeout!)

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}
