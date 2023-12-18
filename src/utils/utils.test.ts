import debounce from './debounce.util'
import { getUrlWithParams } from './http.util'

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const debounceTime = 200
test(`debounce to wait ${debounceTime}ms to call a fn`, async () => {
  const mockFn = jest.fn()
  const debouncedFn = debounce(mockFn, debounceTime)

  debouncedFn()

  expect(mockFn).not.toHaveBeenCalled()
  await wait(debounceTime * 2)
  expect(mockFn).toHaveBeenCalledTimes(1)
})

test(`debounce fn not to be called before ${debounceTime}`, async () => {
  const mockFn = jest.fn()
  const debouncedFn = debounce(mockFn, debounceTime)

  debouncedFn()

  expect(mockFn).not.toHaveBeenCalled()
  await wait(debounceTime / 2)
  expect(mockFn).not.toHaveBeenCalled()
})

test(`getUrlWithParams to return url with params`, () => {
  const url = 'http://testme.com'
  const params = {
    name: 'Damian',
    age: 31,
  }
  const returnedUrl = getUrlWithParams(url, params)

  expect(returnedUrl).toBe(`${url}?${encodeURI(`name=${params.name}&age=${params.age}`)}`)
})

test(`getUrlWithParams to return url with params that contain special chars`, () => {
  const url = 'http://testme.com'
  const params = {
    name: 'Damian Aruj',
    age: 31,
  }
  const returnedUrl = getUrlWithParams(url, params)

  expect(returnedUrl).toBe(`${url}?${encodeURI(`name=${params.name}&age=${params.age}`)}`)
})
