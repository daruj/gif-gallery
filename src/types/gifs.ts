interface Image {
  height: string
  width: string
  url: string
  webp: string
}

export interface Gif {
  id: string
  url: string
  title: string
  images: {
    original: Image
    fixed_height: Image
    fixed_width: Image
  }
}
