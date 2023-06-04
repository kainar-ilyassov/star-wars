import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'antd'
import { type Character } from 'entities/Character'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
      <Meta title={character.name} description={`Birth year: ${character.birth_year}`}/>
    </Card>
  )
})

CharactersListItem.displayName = 'CharactersListItem'
