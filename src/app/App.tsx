import { type ReactElement } from 'react'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

export const App = (): ReactElement => {
  const { theme } = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <AppRouter/>
      </div>
  )
}
