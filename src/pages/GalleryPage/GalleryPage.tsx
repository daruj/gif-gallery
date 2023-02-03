import { useState } from 'react'
import { useLazyListGiftQuery } from '../../api/giphy.api'
import GridContainer from '../../components/GridContainer/GridContainer'
import SearchInput from '../../components/SearchInput/SearchInput'
import styles from './GalleryPage.module.scss'

const GalleryPage = () => {
    const [page, setPage] = useState(1)
    const [trigger, result] = useLazyListGiftQuery()

    return (
        <div className={styles['gallery-page']}>
            <SearchInput onSearch={(search) => trigger({ search, page })} />
            <GridContainer images={result.data?.data || []} />
        </div>
    )
}

export default GalleryPage
