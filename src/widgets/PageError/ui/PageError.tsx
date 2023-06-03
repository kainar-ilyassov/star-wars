import { type ReactElement } from 'react'
import { Button, Typography } from 'antd'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'

const { Text } = Typography

export const PageError = (): ReactElement => {
  const reloadPage = (): void => {
    location.reload()
  }
  return (
    <div className={classNames(cls.pageError)}>
      <Text className={classNames(cls.text)} type="danger">Something went wrong, try again</Text>
      <Button className={classNames(cls.button)} onClick={reloadPage} size="large">Refresh</Button>
    </div>
  )
}
