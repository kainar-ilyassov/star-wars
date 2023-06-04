import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CharactersPage.module.scss'
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

interface CharactersPageProps {
  className?: string
}

const CharactersPage: FC<CharactersPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()

  const totalCharacter = useSelector(getTotalCharacters)
  const characters = useSelector(getCharactersList)
  const isLoading = useSelector(getCharactersPageIsLoading)
  const error = useSelector(getCharactersPageError)

  useEffect(() => {
    dispatch(fetchCharactersList('1') as any)
  }, [])

  if (error != null) {
    return (<PageError/>)
  }

  if (isLoading) {
    return <PageLoader/>
  }

  return (
    <div className={classNames(cls.charactersPage, [className])}>
      <CharactersList characters={characters}/>
    </div>
  )
}

export default memo(CharactersPage)
