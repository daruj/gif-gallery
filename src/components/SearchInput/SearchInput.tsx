import React from 'react'
import debounce from '../../utils/debounce.util'
import styles from './SearchInput.module.scss'

const SearchInput: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <header className={styles['search-input']}>
      <input
        type='text'
        placeholder='Search gifs...'
        onChange={debounce(changeHandler, 300)}
      />
    </header>
  )
}

export default SearchInput
