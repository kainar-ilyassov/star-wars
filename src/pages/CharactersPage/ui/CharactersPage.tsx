import { type FC, memo, useEffect, useState } from 'react'
import { Pagination, type PaginationProps, Input } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import { CharactersList } from 'entities/Character'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
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

interface CharactersPageProps {
  className?: string
}

const CURRENT_PAGE = 1
const { Search } = Input

const CharactersPage: FC<CharactersPageProps> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE)
  const dispatch = useAppDispatch()

  const totalCharacters = useSelector(getTotalCharacters)
  const characters = useSelector(getCharactersList)
  const isLoading = useSelector(getCharactersPageIsLoading)
  const error = useSelector(getCharactersPageError)

  useEffect(() => {
    dispatch(fetchCharactersList(currentPage) as any)
  }, [currentPage])

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
  }

  if (error != null) {
    return (<PageError/>)
  }

  if (isLoading) {
    return <PageLoader/>
  }

  return (
    <div className={classNames(cls.charactersPage, [className])}>
      <Search
        className={classNames(cls.searchInput)}
        size="large"
        placeholder="search character"
        enterButton="Search"
        autoFocus
      />
      <CharactersList characters={characters}/>
      <Pagination
        current={currentPage}
        onChange={onChangePage}
        total={totalCharacters}
        showSizeChanger={false}
        className={classNames(cls.pagination)}
      />
    </div>
  )
}

export default memo(CharactersPage)
