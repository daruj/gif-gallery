import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface ImageProps {
  alt: string
  src: string
  height?: string | number
  width?: string | number
}

const Image: React.FC<ImageProps> = ({ alt, src, height, width }) => (
  <LazyLoadImage
    alt={alt}
    height={height}
    src={src} // use normal <img> attributes as props
    width={width}
    effect='blur'
    wrapperProps={{
      // If you need to, you can tweak the effect transition using the wrapper style.
      style: { transitionDelay: '0.3s' },
    }}
  />
)

export default Image