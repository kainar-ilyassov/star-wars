import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  appTheme: Theme
  setAppTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({ appTheme: Theme.LIGHT })

export const LOCAL_STORAGE_THEME_KEY = 'theme'
