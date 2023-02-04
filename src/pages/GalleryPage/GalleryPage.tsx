import GridContainer from '../../components/GridContainer/GridContainer'
import SearchInput from '../../components/SearchInput/SearchInput'
import styles from './GalleryPage.module.scss'
import useGallerySearch from '../../hooks/use-gallery-search.hook'

const START_SEARCHING_AFTER_CHARS = 3

const GalleryPage = () => {
    const { onSearch, onPaginate, isSuccess, isLoading, isFetching, images } = useGallerySearch({
        searchAfterChars: START_SEARCHING_AFTER_CHARS,
    })

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
