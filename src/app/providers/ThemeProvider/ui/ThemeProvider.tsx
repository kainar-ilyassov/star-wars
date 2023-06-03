import { type FC, type ReactNode, useMemo, useState } from 'react'
import { ConfigProvider, theme } from 'antd'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as Theme ?? Theme.LIGHT

const algorithmTheme = {
  [Theme.LIGHT]: theme.defaultAlgorithm,
  [Theme.DARK]: theme.darkAlgorithm
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    appTheme,
    setAppTheme
  }), [appTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      <ConfigProvider theme={{
        algorithm: algorithmTheme[appTheme]
      }}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}
