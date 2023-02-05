import React, { useEffect, useMemo } from 'react'
import { Gif } from '../../types/gifs'
import GridItem from '../GridItem/GridItem'
import styles from './GridContainer.module.scss'
import { useInView } from 'react-intersection-observer'
import debounce from '../../utils/debounce'
import { LIMIT } from '../../api/giphy.api'

const GridContainer: React.FC<{ images: Gif[]; handlePaginate: () => void; isLoading: boolean }> = ({
    images,
    handlePaginate,
    isLoading,
}) => {
    const { ref, inView } = useInView()

    useEffect(() => {
        const onScroll = debounce(() => {
            if (inView && !isLoading) {
                handlePaginate()
            }
        }, 300)

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [inView, isLoading, handlePaginate])

    // Instead of start paginating when the last item is visible, I want to do it when we are at 25% of the amount of items visible in the page.
    // That will improve UX because the user will mostly not notice that we are paginating at all.
    const startPaginatingOnItem = useMemo(() => images.length - Math.ceil(LIMIT * 0.25), [images])

    return (
        <div className={styles['grid-container']}>
            {images.map((image, index) => {
                if (index === startPaginatingOnItem) {
                    return <GridItem title={image.title} key={image.id} url={image.images.original.webp} ref={ref} />
                }

                return <GridItem title={image.title} key={image.id} url={image.images.original.webp} />
            })}
        </div>
    )
}

export default React.memo(GridContainer)
