import { Empty } from 'antd'
import { type ReactElement } from 'react'
import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export const NotFoundPage = (): ReactElement => {
  return (
    <div className={classNames(cls.notFoundPage)}>
      <Empty description="Page is not found"/>
    </div>
  )
}
