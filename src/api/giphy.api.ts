import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import envs from '../environments'
import { Gif } from '../types/gifs'

interface ApiResponse<T> {
    pagination: {
        total_count: number
        count: number
        offset: number
    }
    data: T[]
}

const BASE_URL = 'https://api.giphy.com/v1/'
const LIMIT = 20

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        listGift: builder.query<ApiResponse<Gif>, { search: string; page: number }>({
            query: ({ search = '', page = 1 }) => ({
                url: `gifs/search`,
                method: 'GET',
                params: {
                    api_key: envs.giphy.apiKey,
                    q: search,
                    limit: LIMIT,
                    offset: page === 1 ? 0 : LIMIT * page,
                },
            }),
        }),
    }),
})

export const { useLazyListGiftQuery } = api
