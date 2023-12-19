import { useCallback, useState, useMemo, useRef } from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { fetchGifs, LIMIT } from '@src/api/giphy.api'
import { Gif } from '@src/types/gifs'

interface UseGallerySearch {
  searchAfterChars: number
  initialSearchQuery?: string
}

const useGallerySearch = ({ searchAfterChars, initialSearchQuery }: UseGallerySearch) => {
  const [search, setSearch] = useState(initialSearchQuery || '')
  const [canSearch, setCanSearch] = useState(!!initialSearchQuery)
  const initValues = useRef({ searchAfterChars, initialSearchQuery })

  const {
    isLoading,
    data,
    fetchNextPage,
    isFetching,
    isSuccess,
    isFetched,
    isRefetching,
    isError,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['search-gifs', search],
    queryFn: async ({
      queryKey,
      pageParam = 0,
    }: QueryFunctionContext<[string, string], number>) => {
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
    } else {
      setSearch(initValues.current.initialSearchQuery || searchTerm)
    }
  }, [])

  const onPaginate = useCallback(() => {
    if (search.length >= initValues.current.searchAfterChars) {
      fetchNextPage()
    }
  }, [fetchNextPage, search.length])

  const images = useMemo(
    (): Gif[] =>
      isSuccess && search.length >= initValues.current.searchAfterChars
        ? data.pages.flatMap((page) => page.data)
        : [],
    [data?.pages, isSuccess, search.length]
  )

  return {
    onSearch,
    onPaginate,
    images,
    isLoading,
    isFetching,
    isSuccess,
    isFetched,
    isRefetching,
    isError,
    refetch,
  }
}

export default useGallerySearch
