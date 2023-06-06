import { memo, type ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image, Input, Form, Button, Breadcrumb, Skeleton } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import { PageError } from 'widgets/PageError'
import { fetchCharacterById } from 'entities/Character/model/services/fetchCharacterById'
import { useCharacterInfo } from 'entities/Character/hooks/useCharacterInfo'
import { type Character, characterDetailsActions } from 'entities/Character'
import { formLabels } from 'entities/Character/const'
import cls from './CharacterDetails.module.scss'

interface CharacterDetailsProps {
  className?: string
  id: string
}

const { Item } = Form
const { onCharacterEdit, onCharacterSave } = characterDetailsActions

export const CharacterDetails = memo(({ className, id }: CharacterDetailsProps) => {
  const { data: character, isLoading, error, dispatch } = useCharacterInfo(id)
  const [isEditable, setIsEditable] = useState(false)

  if (error) {
    return (
      <PageError/>
    )
  }

  const handleEdit = (): void => { setIsEditable(!isEditable) }
  const handleSave = (): void => {
    setIsEditable(false)
    dispatch(onCharacterSave({ id }))
  }
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
          name={key}
          rules={[{
            required: true,
            message: formLabels[key] + ' is required'
          }]}
        >
          {isLoading
            ? (
              <Skeleton.Input active={true}/>
              )
            : (
              <Input
                readOnly={!isEditable}
                name={key}
                value={value}
                onChange={(event) => { dispatch(onCharacterEdit(event)) }}
              />
              )}
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
            <Form
              layout="horizontal"
              size="small"
              labelCol={{ span: 8 }}
              fields={
                Object.entries(character)
                  .filter(([key]) => formLabels[key])
                  .map(([key, value]) => ({ name: key, value }))
              }
              onFinish={handleSave}
            >
              {renderFormElements(character)}
              <div className={classNames(cls.actionButtons)}>
                {isEditable
                  ? (
                    <>
                      <Item>
                        <Button htmlType="submit">Save</Button>
                      </Item>
                      <Button onClick={handleCancel}>Cancel</Button>
                    </>
                    )
                  : (
                    <Button onClick={handleEdit}>Edit</Button>
                    )}
              </div>
            </Form>
          )}
        </div>
      </div>
    </div>
  )
})

CharacterDetails.displayName = 'CharacterDetails'
