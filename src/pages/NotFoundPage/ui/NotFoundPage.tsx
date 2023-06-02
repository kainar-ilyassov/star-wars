import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type FC } from 'react'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      Page is not found
    </div>
  )
}
