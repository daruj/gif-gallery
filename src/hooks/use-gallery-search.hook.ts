import { useCallback, useState, useMemo, useRef } from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { fetchGifs, LIMIT } from '../api/giphy.api'

interface UseGallerySearch {
    searchAfterChars: number
}

const useGallerySearch = ({ searchAfterChars }: UseGallerySearch) => {
    const [search, setSearch] = useState('')
    const [canSearch, setCanSearch] = useState(false)
    const initValues = useRef({ searchAfterChars })

    const { isLoading, data, fetchNextPage, isFetching, isSuccess, isFetched, isRefetching } = useInfiniteQuery({
        queryKey: ['search-gifs', search],
        queryFn: async ({ queryKey, pageParam = 0 }: QueryFunctionContext<[string, string], number>) => {
            setCanSearch(false)
            const search = queryKey[1]
            const results = await fetchGifs(search, pageParam)
            return results
        },
        enabled: canSearch,
        getNextPageParam: (lastPage) => {
            const { offset, total_count } = lastPage.pagination
            return total_count > offset ? lastPage.pagination.offset / LIMIT + 1 : undefined
        },
    })
    const onSearch = useCallback((searchTerm: string) => {
        setSearch(searchTerm)
        if (searchTerm.length >= initValues.current.searchAfterChars) {
            setCanSearch(true)
        }
    }, [])

    const onPaginate = useCallback(() => {
        if (search.length >= initValues.current.searchAfterChars) {
            fetchNextPage()
        }
    }, [fetchNextPage, search.length])

    const images = useMemo(
        () =>
            isSuccess && search.length >= initValues.current.searchAfterChars
                ? data.pages.flatMap((page) => page.data)
                : [],
        [data?.pages, isSuccess, search.length],
    )

    return { onSearch, onPaginate, images, isLoading, isFetching, isSuccess, isFetched, isRefetching }
}

export default useGallerySearch
