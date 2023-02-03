import React, { useRef, useEffect, useState } from 'react'
import { Gif } from '../../types/gifs'
import GridItem from '../GridItem/GridItem'
import styles from './GridContainer.module.scss'

const GridContainer: React.FC<{ images: Gif[]; handlePaginate: () => void }> = ({ images, handlePaginate }) => {
    const [lastElement, setLastElement] = useState<HTMLPictureElement | null>(null)

    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0]
            if (first.isIntersecting) {
                handlePaginate()
            }
        }),
    )

    useEffect(() => {
        const currentElement = lastElement
        const currentObserver = observer.current

        if (currentElement) {
            currentObserver.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [lastElement])

    return (
        <div className={styles['grid-container']}>
            {images.map((image, index) => {
                if (index === images.length - 1) {
                    return (
                        <GridItem
                            id={image.id}
                            title={image.title}
                            key={image.id}
                            url={image.images.original.webp}
                            ref={setLastElement}
                        />
                    )
                } else {
                    return (
                        <GridItem id={image.id} title={image.title} key={image.id} url={image.images.original.webp} />
                    )
                }
            })}
        </div>
    )
}

export default GridContainer
