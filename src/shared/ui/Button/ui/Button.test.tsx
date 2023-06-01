import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button component', () => {
  test('button renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('button renders with clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('clear')
  })
})
