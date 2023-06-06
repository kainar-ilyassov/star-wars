import { type FC, memo } from 'react'
import { Pagination, Input, Result } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import { CharactersList } from 'entities/Character'
import { PageLoader } from 'shared/ui/PageLoader'
import { PageError } from 'widgets/PageError'
import cls from './CharactersPage.module.scss'
import { useCharactersInfo } from 'pages/CharactersPage/hooks/useCharactersInfo'

interface CharactersPageProps {
  className?: string
}

const CharactersPage: FC<CharactersPageProps> = ({ className }) => {
  const {
    page,
    error,
    search,
    isLoading,
    characters,
    handleSearch,
    onChangePage,
    totalCharactersNum
  } = useCharactersInfo()

  if (error) {
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
                total={totalCharactersNum}
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
