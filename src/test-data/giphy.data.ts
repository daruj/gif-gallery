import { Gif } from '@src/types/gifs'

export const image: Gif = {
  id: '1234',
  title: 'Golden Retriever',
  url: 'http://fake.com/myimage',
  images: {
    original: {
      url: 'http://fake.com/myimage.gif',
      width: '300',
      height: '300',
      webp: 'http://fake.com/myimage.webp.gif',
    },
  },
}
