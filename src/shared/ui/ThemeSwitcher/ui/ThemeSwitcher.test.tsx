import { render } from '@testing-library/react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

jest.mock('app/providers/ThemeProvider', () => ({
  useTheme: () => ({
    appTheme: 'light',
    toggleTheme: jest.fn()
  }),
  Theme: {
    DARK: 'dark',
    LIGHT: 'light'
  }
}))

describe('ThemeSwitcher', () => {
  test('render', () => {
    const { container } = render(
      <ThemeSwitcher/>
    )
    expect(container.firstChild).toHaveClass('themeSwitcher')
  })
})
