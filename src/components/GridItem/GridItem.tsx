import React, { forwardRef, Ref } from 'react'
import styles from './GridItem.module.scss'

interface GridItemPros {
    id: string
    url: string
    title: string
}
const GridItem = forwardRef(({ id, url, title }: GridItemPros, ref: Ref<HTMLPictureElement>) => {
    return (
        <picture className={styles['grid-item']} key={id} ref={ref}>
            <img src={url} alt={title} />
        </picture>
    )
})

export default React.memo(GridItem)
