import React from 'react'
import styles from './GridItem.module.scss'

const GridItem: React.FC<{ id: string; url: string; title: string }> = ({ id, url, title }) => {
    return (
        <picture className={styles['grid-item']} key={id}>
            <img src={url} alt={title} />
        </picture>
    )
}

export default React.memo(GridItem)
