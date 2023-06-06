import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'
import { CharacterDetails } from 'entities/Character'
import cls from './CharacterDetailsPage.module.scss'

interface CharacterDetailsPageProps {
  className?: string
}

const CharacterDetailsPage: FC<CharacterDetailsPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (<NotFoundPage/>)
  }

  return (
    <div className={classNames(cls.characterDetailsPage, [className])}>
      <CharacterDetails id={id}/>
    </div>
  )
}

export default memo(CharacterDetailsPage)
