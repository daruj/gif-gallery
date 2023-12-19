import React from 'react'
import styles from './GridContainerPlaceholder.module.scss'

import GridItemPlaceholder from '@src/components/GridItemPlaceholder/GridItemPlaceholder'

const GridContainerPlaceholder: React.FC<{
  images: unknown[]
}> = ({ images }) => (
  <div className={styles['grid-container-placeholder']}>
    {images.map((_, index) => {
      return <GridItemPlaceholder key={index} />
    })}
  </div>
)

export default React.memo(GridContainerPlaceholder)
