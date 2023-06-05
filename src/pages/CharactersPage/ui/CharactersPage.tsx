import { type ChangeEvent, type FC, memo, useEffect, useState } from 'react'
import { Pagination, type PaginationProps, Input, Result } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import { CharactersList } from 'entities/Character'
import { useSelector } from 'react-redux'
import {
  getCharactersList,
  getCharactersPageError,
  getCharactersPageIsLoading, getTotalCharacters
} from 'pages/CharactersPage/model/selectors/charactersPage'
import { fetchCharactersList } from 'pages/CharactersPage/model/services/fetchCharactersList'
import { PageLoader } from 'shared/ui/PageLoader'
import { PageError } from 'widgets/PageError'
import cls from './CharactersPage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'

interface CharactersPageProps {
  className?: string
}

const DEFAULT_PAGE = 1
const DELAY = 1000

const CharactersPage: FC<CharactersPageProps> = ({ className }) => {
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, DELAY)
  const dispatch = useAppDispatch()

  const totalCharacters = useSelector(getTotalCharacters)
  const characters = useSelector(getCharactersList)
  const isLoading = useSelector(getCharactersPageIsLoading)
  const error = useSelector(getCharactersPageError)

  useEffect(() => {
    dispatch(fetchCharactersList({ search, page }) as any)
  }, [page, debouncedSearch])

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page)
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  if (error != null) {
    return (<PageError/>)
  }

  return (
    <div className={classNames(cls.charactersPage, [className])}>
      <Input
        value={search}
        className={classNames(cls.searchInput)}
        size="large"
        placeholder="search character"
        autoFocus
        onChange={handleSearch}
      />

      {isLoading
        ? <PageLoader/>
        : (characters?.length === 0
            ? (<Result title="Character not found"/>)
            : <>
              <CharactersList characters={characters}/>
              <Pagination
                current={page}
                onChange={onChangePage}
                total={totalCharacters}
                showSizeChanger={false}
                hideOnSinglePage={true}
                className={classNames(cls.pagination)}
              />
            </>
          )}
      <div></div>
    </div>
  )
}

export default memo(CharactersPage)
