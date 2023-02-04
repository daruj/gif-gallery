import React, { useEffect } from 'react'
import { Gif } from '../../types/gifs'
import GridItem from '../GridItem/GridItem'
import styles from './GridContainer.module.scss'
import { useInView } from 'react-intersection-observer'

const GridContainer: React.FC<{ images: Gif[]; handlePaginate: () => void; isLoading: boolean }> = ({
    images,
    handlePaginate,
    isLoading,
}) => {
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            handlePaginate()
        }
    }, [inView, handlePaginate])

    return (
        <div className={styles['grid-container']}>
            {images.map((image, index) => {
                if (index === images.length - 1) {
                    return (
                        <GridItem
                            title={image.title}
                            key={image.id}
                            url={image.images.original.webp}
                            ref={ref}
                            isLoading={isLoading}
                        />
                    )
                } else {
                    return (
                        <GridItem
                            title={image.title}
                            key={image.id}
                            url={image.images.original.webp}
                            isLoading={isLoading}
                        />
                    )
                }
            })}
            {isLoading &&
                Array.from({ length: 20 }).map((_, index) => <GridItem title='' key={index} url='' isLoading />)}
        </div>
    )
}

export default GridContainer
