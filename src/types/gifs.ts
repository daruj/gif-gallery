export interface Gif {
    id: string
    url: string
    title: string
    images: {
        original: {
            height: string
            width: string
            url: string
            webp: string
        }
    }
}
