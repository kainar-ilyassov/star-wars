import { type ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getCharactersList, getCharactersPageError,
  getCharactersPageIsLoading,
  getTotalCharacters
} from 'pages/CharactersPage/model/selectors/charactersPage'
import { fetchCharactersList } from 'pages/CharactersPage/model/services/fetchCharactersList'
import { type PaginationProps } from 'antd'
import { type Character } from 'entities/Character'

const DEFAULT_PAGE = 1
const DELAY = 1000

interface UseCharactersInfoResult {
  page: number
  search: string
  error?: string
  isLoading: boolean
  characters?: Character[]
  totalCharactersNum: number
  onChangePage: (page: number, pageSize: number) => void
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useCharactersInfo (): UseCharactersInfoResult {
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, DELAY)
  const dispatch = useAppDispatch()

  const totalCharactersNum = useSelector(getTotalCharacters)
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

  return {
    page,
    search,
    error,
    isLoading,
    characters,
    totalCharactersNum,
    onChangePage,
    handleSearch
  }
}
