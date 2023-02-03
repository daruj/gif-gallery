import React from 'react'
import { Gif } from '../../types/gifs'
import GridItem from '../GridItem/GridItem'
import styles from './GridContainer.module.scss'

const GridContainer: React.FC<{ images: Gif[] }> = ({ images }) => {
    return (
        <div className={styles['grid-container']}>
            {images.map((image) => (
                <GridItem id={image.id} title={image.title} key={image.id} url={image.images.original.webp} />
            ))}
        </div>
    )
}

export default GridContainer
