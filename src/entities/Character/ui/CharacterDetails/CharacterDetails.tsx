import { memo, type ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image, Input, Form, Button, Breadcrumb } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getCharacterDetailsData, getCharacterDetailsError
} from 'entities/Character/model/selectors/characterDetails'
import { fetchCharacterById } from 'entities/Character/model/services/fetchCharacterById'
import { PageError } from 'widgets/PageError'
import cls from './CharacterDetails.module.scss'
import { type Character, characterDetailsActions } from 'entities/Character'
import { formLabels } from 'entities/Character/const'

interface CharacterDetailsProps {
  className?: string
  id: string
}

const { Item } = Form
const { onCharacterEdit, onCharacterSave } = characterDetailsActions

export const CharacterDetails = memo(({ className, id }: CharacterDetailsProps) => {
  const dispatch = useAppDispatch()
  const character = useSelector(getCharacterDetailsData)
  const error = useSelector(getCharacterDetailsError)
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    dispatch(fetchCharacterById(id) as any)
  }, [])

  if (error !== null && error !== undefined) {
    return (
      <PageError/>
    )
  }

  const handleEdit = (): void => { setIsEditable(!isEditable) }
  const handleSave = (): void => { dispatch(onCharacterSave(id)) }
  const handleCancel = (): void => {
    setIsEditable(false)
    dispatch(fetchCharacterById(id) as any)
  }

  const renderFormElements = (characterInfo: Character): ReactNode => {
    return Object.entries(characterInfo)
      .filter(([key]) => formLabels[key])
      .map(([key, value], index) => (
        <Item
          key={`${characterInfo.url}-${index}`}
          label={formLabels[key]}
        >
          <Input
            readOnly={!isEditable}
            name={key}
            value={value}
            onChange={(event) => { dispatch(onCharacterEdit(event)) }}
          />
        </Item>
      ))
  }

  return (
    <div className={classNames(cls.characterDetails, [className])}>
      <Breadcrumb
        items={[
          {
            title: <Link to={'/'}>Home</Link>
          },
          {
            title: <span>Character Details</span>
          }
        ]}
      />
      <div className={classNames(cls.infoWrapper)}>
        <div className={classNames(cls.characterPhoto)}>
          <Image
            preview={false}
            width={400}
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </div>
        <div className={classNames(cls.characterInfo)}>
          {(character != null) && (
            <Form layout="horizontal" size="small" labelCol={{ span: 8 }}>
              {renderFormElements(character)}
            </Form>
          )}
        </div>
      </div>
      <div className={classNames(cls.actionButtons)}>
        {isEditable
          ? (
            <>
              <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </>
            )
          : (
            <Button onClick={handleEdit}>Edit</Button>
            )}
      </div>
    </div>
  )
})

CharacterDetails.displayName = 'CharacterDetails'
