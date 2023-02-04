import { useCallback, useState, useMemo } from 'react'
import GridContainer from '../../components/GridContainer/GridContainer'
import SearchInput from '../../components/SearchInput/SearchInput'
import styles from './GalleryPage.module.scss'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { fetchGifs, LIMIT } from '../../api/giphy.api'

const GalleryPage = () => {
    const [search, setSearch] = useState('')
    const [canSearch, setCanSearch] = useState(false)

    const { isLoading, data, fetchNextPage, isFetching, isSuccess } = useInfiniteQuery({
        queryKey: ['search-gifs', search],
        queryFn: async ({ queryKey, pageParam = 0 }: QueryFunctionContext<[string, string], number>) => {
            setCanSearch(false)
            const search = queryKey[1]
            return await fetchGifs(search, pageParam)
        },
        enabled: canSearch,
        getNextPageParam: (lastPage) => {
            const { offset, total_count } = lastPage.pagination
            return total_count > offset ? lastPage.pagination.offset / LIMIT + 1 : undefined
        },
    })

    const onSearch = useCallback((searchTerm: string) => {
        if (searchTerm.length >= 3) {
            setSearch(searchTerm)
            setCanSearch(true)
        }
    }, [])

    const onPaginate = useCallback(() => {
        if (isSuccess) {
            fetchNextPage()
        }
    }, [fetchNextPage, isSuccess])

    const images = useMemo(() => (isSuccess ? data.pages.flatMap((page) => page.data) : []), [data?.pages, isSuccess])

    return (
        <div className={styles['gallery-page']}>
            <SearchInput onSearch={onSearch} />
            <div className={styles['content']}>
                {isSuccess && (
                    <GridContainer images={images} isLoading={isLoading || isFetching} handlePaginate={onPaginate} />
                )}
            </div>
        </div>
    )
}

export default GalleryPage
