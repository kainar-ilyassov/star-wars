import { type ReactElement } from 'react'
import { Switch } from 'antd'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = (): ReactElement => {
  const { appTheme, toggleTheme } = useTheme()
  return (
    <Switch
      className={classNames(cls.themeSwitcher)}
      onChange={toggleTheme}
      checkedChildren={Theme.DARK}
      unCheckedChildren={Theme.LIGHT}
      checked={appTheme === Theme.DARK}
    />
  )
}
