import React, { forwardRef, Ref } from 'react'
import styles from './GridItem.module.scss'
import PlaceholderLoading from 'react-placeholder-loading'

interface GridItemPros {
    url: string
    title: string
    isLoading: boolean
}
const GridItem = forwardRef(({ url, title, isLoading }: GridItemPros, ref: Ref<HTMLPictureElement>) => {
    if (isLoading) {
        return (
            <picture className={styles['grid-item']}>
                <PlaceholderLoading shape='rect' width='100%' height='100%' />
            </picture>
        )
    }

    return (
        <picture className={styles['grid-item']} ref={ref}>
            <img src={url} alt={title} />
        </picture>
    )
})

export default React.memo(GridItem)
