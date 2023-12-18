import React, { forwardRef, Ref } from 'react'
import styles from './GridItem.module.scss'

interface GridItemPros {
  url: string
  title: string
}
const GridItem = forwardRef(
  ({ url, title }: GridItemPros, ref: Ref<HTMLPictureElement>) => {
    return (
      <picture className={styles['grid-item']} ref={ref}>
        <img src={url} alt={title} />
      </picture>
    )
  }
)

export default React.memo(GridItem)
