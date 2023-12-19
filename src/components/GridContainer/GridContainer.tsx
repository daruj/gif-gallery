import React, { useMemo } from 'react'
import { Gif } from '@src/types/gifs'
import GridItem from '@src/components/GridItem/GridItem'
import styles from './GridContainer.module.scss'
import { LIMIT } from '@src/api/giphy.api'
import useIntersectionObserver from '@src/hooks/use-intersection-observer'

const GridContainer: React.FC<{
  images: Gif[]
  handlePaginate: () => void
  isLoading: boolean
}> = ({ images, handlePaginate, isLoading }) => {
  const observerTarget = useIntersectionObserver(handlePaginate, isLoading)

  // Instead of start paginating when the last item is visible, I want to do it when we are at 25% of the amount of items visible in the page.
  // That will improve UX because the user will mostly not notice that we are paginating at all.
  const startPaginatingOnItem = useMemo(
    () => images.length - Math.ceil(LIMIT * 0.25),
    [images]
  )
  return (
    <div className={styles['grid-container']}>
      {images.map((image, index) => {
        if (index > 0 && index === startPaginatingOnItem) {
          return (
            <GridItem
              title={image.title}
              key={image.id}
              url={image.images.fixed_height.webp}
              ref={observerTarget}
            />
          )
        }
        return (
          <GridItem
            title={image.title}
            key={image.id}
            url={image.images.fixed_height.webp}
          />
        )
      })}
    </div>
  )
}

export default React.memo(GridContainer)
