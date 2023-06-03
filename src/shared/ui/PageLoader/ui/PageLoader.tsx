import { classNames } from 'shared/lib/classNames/classNames'
import { Spin } from 'antd'
import cls from './PageLoader.module.scss'
import { type FC } from 'react'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.pageLoader, [className])}>
      <Spin size="large"/>
    </div>
  )
}
