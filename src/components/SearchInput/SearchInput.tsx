import React, { useCallback } from 'react'
import debounce from '../../utils/debounce'
import styles from './SearchInput.module.scss'

const SearchInput: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
    }
    const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), [])

    return (
        <header className={styles['search-input']}>
            <input type='text' placeholder='Search gifs...' onChange={debouncedChangeHandler} />
        </header>
    )
}

export default SearchInput
