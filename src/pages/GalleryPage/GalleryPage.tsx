import GridContainer from '@src/components/GridContainer/GridContainer'
import SearchInput from '@src/components/SearchInput/SearchInput'
import styles from './GalleryPage.module.scss'
import useGallerySearch from '@src/hooks/use-gallery-search.hook'
import GridContainerPlaceholder from '@src/components/GridContainerPlaceholder/GridContainerPlaceholder'
import { LIMIT } from '@src/api/giphy.api'

const START_SEARCHING_AFTER_CHARS = 3

const placeholders = Array(LIMIT).fill(null)

const GalleryPage = () => {
  const { onSearch, onPaginate, images, isRefetching, isError, refetch, isFetching } =
    useGallerySearch({
      searchAfterChars: START_SEARCHING_AFTER_CHARS,
      // the initialSearchQuery will make the user always see something in the UI even if he clears the search.
      // I believe showing random gifs makes a lot of sense here because it makes the user to stay in the page longer.
      initialSearchQuery: 'random',
    })

  return (
    <div className={styles['gallery-page']}>
      <SearchInput onSearch={onSearch} />
      <div className={styles['content']}>
        {isError && (
          <p className={styles['error']}>
            {`We've found an error, plz `}
            <a
              href='#/'
              onClick={(evt) => {
                evt.preventDefault()
                refetch()
              }}
            >
              retry
            </a>
          </p>
        )}
        {isFetching && <GridContainerPlaceholder images={placeholders} />}
        <GridContainer
          images={images}
          isLoading={isRefetching}
          handlePaginate={onPaginate}
        />
      </div>
    </div>
  )
}

export default GalleryPage
