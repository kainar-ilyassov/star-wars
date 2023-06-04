import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import { type Character } from 'entities/Character'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CharactersListitem.module.scss'

const { Meta } = Card

interface CharactersListItemProps {
  className?: string
  character: Character
  characterId: string
}

export const CharactersListItem = memo(({ character, characterId }: CharactersListItemProps) => {
  const navigate = useNavigate()

  const onOpenCharacter = useCallback(() => {
    navigate(RoutePath.character_details + characterId)
  }, [characterId, navigate])

  return (
    <Card
      onClick={onOpenCharacter}
      hoverable
      style={{ width: '200px' }}
      cover={
        <img
          alt={`${character.name} photo`}
          src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}/>
      }
    >
      <Meta className={classNames(cls.cardTitle)} title={character.name}/>
    </Card>
  )
})

CharactersListItem.displayName = 'CharactersListItem'
