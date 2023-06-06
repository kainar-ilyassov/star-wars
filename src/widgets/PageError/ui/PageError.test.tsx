import { fireEvent, render, screen } from '@testing-library/react'
import { PageError } from 'widgets/PageError'

describe('PageError page', () => {
  test('render test', () => {
    render(<PageError/>)
    const button = screen.getByRole('button', { name: 'Refresh' })
    expect(screen.getByText('Something went wrong, try again')).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button')
  })

  test('reload trigger', () => {
    const originalLocation = window.location
    delete (window as any).location
    window.location = {
      reload: jest.fn()
    } as any
    render(<PageError/>)
    const button = screen.getByRole('button', { name: 'Refresh' })
    fireEvent.click(button)
    expect(window.location.reload).toHaveBeenCalledTimes(1)
    delete (window as any).location
    window.location = originalLocation
  })
})
