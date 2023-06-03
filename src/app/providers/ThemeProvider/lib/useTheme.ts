import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  appTheme: Theme
}

const themes = {
  [Theme.LIGHT]: Theme.DARK,
  [Theme.DARK]: Theme.LIGHT
}

export function useTheme (): UseThemeResult {
  const { appTheme, setAppTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    setAppTheme?.(themes[appTheme])
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themes[appTheme])
  }

  return {
    appTheme,
    toggleTheme
  }
}
