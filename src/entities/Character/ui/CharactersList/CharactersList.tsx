import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CharactersList.module.scss'
import { type Character, CharactersListItem } from 'entities/Character'

interface CharactersListProps {
  className?: string
  characters?: Character[]
}

export const CharactersList = memo(({ className, characters }: CharactersListProps) => {
  const renderCharacter = (character: Character): ReactNode => {
    const urlParts = character.url.split('/')
    const characterId = urlParts[urlParts.length - 2]

    return (
      <CharactersListItem
        key={character.url}
        character={character}
        characterId={characterId}
      />
    )
  }

  return (
    <div className={classNames(cls.charactersList, [className])}>
      {characters?.map(renderCharacter)}
    </div>
  )
})

CharactersList.displayName = 'CharactersList'
