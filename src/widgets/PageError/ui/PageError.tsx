import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className = '' }) => {
  const reloadPage = (): void => {
    location.reload()
  }
  return (
        <div className={classNames(cls.pageError, {}, [className])}>
          <p className={classNames(cls.message)}>Something went wrong</p>
          <Button className={classNames(cls.button)} onClick={reloadPage}>Refresh</Button>
        </div>
  )
}
