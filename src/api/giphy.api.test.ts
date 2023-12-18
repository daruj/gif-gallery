import { Gif } from '../types/gifs'
import { fetchGifs, ApiResponse, GIPHY_BASE_URL, LIMIT } from './giphy.api'
import envs from '../environments'
import { image } from '../test-data/giphy.data'

const currentPage = 0
const search = 'Dogs'
const offset = LIMIT * currentPage

const gifsResponse: ApiResponse<Gif> = {
  pagination: {
    count: LIMIT,
    total_count: 10000,
    offset,
  },
  data: [image],
}

test('fetchGifs: should return a list of gifs', async () => {
  const mockJsonResponse = jest.fn().mockResolvedValue(gifsResponse)
  const mockFetchResponse = jest
    .fn()
    .mockResolvedValue({ json: mockJsonResponse, ok: true })
  jest.spyOn(global, 'fetch').mockImplementation(mockFetchResponse)

  const response = await fetchGifs(search, currentPage)
  const { data: images } = response

  expect(Array.isArray(images)).toBe(true)
  expect(response).toEqual(gifsResponse)
  expect(mockFetchResponse).toHaveBeenCalledWith(
    `${GIPHY_BASE_URL}gifs/search?api_key=${envs.giphy.apiKey}&q=${search}&limit=${LIMIT}&offset=${offset}`
  )
  expect(mockJsonResponse).toHaveBeenCalled()
})

test('fetchGifs: should throw an error if the response is not ok', async () => {
  const errorStatusText = 'Failed to fetch: Not Found'
  const mockFetchResponse = jest.fn().mockResolvedValue({
    ok: false,
    statusText: errorStatusText,
  })
  jest.spyOn(global, 'fetch').mockImplementation(mockFetchResponse)

  let error: Error | undefined
  try {
    await fetchGifs(search, currentPage)
  } catch (e) {
    error = e as Error
  }
  expect(error).toBeDefined()
  expect(error!.message).toBe(errorStatusText)
  expect(mockFetchResponse).toHaveBeenCalledWith(
    `${GIPHY_BASE_URL}gifs/search?api_key=${envs.giphy.apiKey}&q=${search}&limit=${LIMIT}&offset=${offset}`
  )
})
