import envs from '../environments'
import { Gif } from '../types/gifs'
import { getUrlWithParams } from '../utils/http.util'

export interface ApiResponse<T> {
    pagination: {
        total_count: number
        count: number
        offset: number
    }
    data: T[]
}

export const GIPHY_BASE_URL = 'https://api.giphy.com/v1/'
export const LIMIT = 20

export const fetchGifs = async (searchTerm: string, page: number): Promise<ApiResponse<Gif>> => {
    const url = getUrlWithParams(`${GIPHY_BASE_URL}gifs/search`, {
        api_key: envs.giphy.apiKey,
        q: searchTerm,
        limit: LIMIT,
        offset: LIMIT * page,
    })

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return await response.json()
}
