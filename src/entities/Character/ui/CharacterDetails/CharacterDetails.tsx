import { memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CharacterDetails.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getCharacterDetailsData, getCharacterDetailsError,
  getCharacterDetailsIsLoading
} from 'entities/Character/model/selectors/characterDetails'
import { fetchCharacterById } from 'entities/Character/model/services/fetchCharacterById'
import { PageLoader } from 'shared/ui/PageLoader'
import { PageError } from 'widgets/PageError'

interface CharacterDetailsProps {
  className?: string
  id: string
}

export const CharacterDetails = memo(({ className, id }: CharacterDetailsProps) => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getCharacterDetailsIsLoading)
  const character = useSelector(getCharacterDetailsData)
  const error = useSelector(getCharacterDetailsError)

  useEffect(() => {
    dispatch(fetchCharacterById(id) as any)
  }, [])

  if (isLoading) {
    return (<PageLoader/>)
  }

  if (error !== null && error !== undefined) {
    return (
      <PageError/>
    )
  }

  return (
    <div className={classNames(cls.CharacterDetails, [className])}>
      {character?.name}
    </div>
  )
})

CharacterDetails.displayName = 'CharacterDetails'
