import React, { forwardRef, Ref } from 'react'
import styles from './GridItem.module.scss'
import Image from '@src/components/Image/Image'

interface GridItemPros {
  url: string
  title: string
}
const GridItem = forwardRef(
  ({ url, title }: GridItemPros, ref: Ref<HTMLPictureElement>) => (
    <picture className={styles['grid-item']} ref={ref}>
      <Image src={url} alt={title} width='100%' height='100%' />
      <div className={styles['caption']}>
        <span>{title}</span>
      </div>
    </picture>
  )
)

GridItem.displayName = 'GridItem'

export default React.memo(GridItem)
