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
        if (searchTerm.length >= initValues.current.searchAfterChars) {
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

    return { onSearch, onPaginate, images, isLoading, isFetching, isSuccess }
}

export default useGallerySearch