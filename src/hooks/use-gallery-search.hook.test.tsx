import React from 'react'
test('test', () => {})

// import { render, screen } from '@testing-library/react'
// import useGallerySearch from './use-gallery-search.hook'
// import { useInfiniteQuery } from 'react-query'

// jest.mock('react-query', () => {
//     return {
//         useInfiniteQuery: jest.fn(() => ({
//             isLoading: false,
//             fetchNextPage: jest.fn(),
//             isFetching: false,
//             isSuccess: true,
//             isFetched: true,
//             isRefetching: false,
//             data: {
//                 pages: [
//                     {
//                         data: [
//                             {
//                                 id: '1234',
//                                 title: 'Golden Retriever',
//                                 url: 'http://fake.com/myimage',
//                                 images: {
//                                     original: {
//                                         url: 'http://fake.com/myimage.gif',
//                                         width: '300',
//                                         height: '300',
//                                         webp: 'http://fake.com/myimage.webp.gif',
//                                     },
//                                 },
//                             },
//                         ],
//                     },
//                 ],
//             },
//         })),
//     }
// })

// test('testing response of useGalleryHook', async () => {
//     const TestComponent = () => {
//         const hookResult = useGallerySearch({ searchAfterChars: 3, initialSearchQuery: 'random' })
//         console.log('ACA', hookResult.images)
//         return <p>{hookResult.images[0].title}</p>
//     }

//     render(<TestComponent />)
//     const paragraphElement = screen.getByText(/Golden Retriever/i)
//     expect(paragraphElement).toBeInTheDocument()

//     expect(useInfiniteQuery).toHaveBeenCalledWith('myQueryKey', expect.any(Function), {})
// })
