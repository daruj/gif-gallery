import { useCallback, useState } from 'react'
import { useLazyListGiftQuery } from '../../api/giphy.api'
import GridContainer from '../../components/GridContainer/GridContainer'
import SearchInput from '../../components/SearchInput/SearchInput'
import styles from './GalleryPage.module.scss'

const GalleryPage = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [trigger, result] = useLazyListGiftQuery()

    const onSearch = useCallback(
        (search: string) => {
            setSearch(search)
            trigger({ search, page })
        },
        [page, trigger],
    )

    const onPaginate = () => {
        // console.log('ACAA', result.isSuccess, result.data?.pagination.total_count, result.data?.pagination.offset)
        // if (
        //     !result.isLoading &&
        //     result.isSuccess &&
        //     result.data?.pagination.total_count > result.data?.pagination.offset
        // ) {
        setPage(page + 1)

        // trigger({ search, page: page + 1 })
        // }
    }

    console.log(page)

    return (
        <div className={styles['gallery-page']}>
            <SearchInput onSearch={onSearch} />
            {result.isSuccess && result.data.data.length && (
                <GridContainer images={result.data?.data || []} handlePaginate={onPaginate} />
            )}
        </div>
    )
}

export default GalleryPage
