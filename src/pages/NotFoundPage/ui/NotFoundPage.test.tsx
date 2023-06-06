import { render, screen } from '@testing-library/react'
import { NotFoundPage } from 'pages/NotFoundPage'

describe('NotFoundPage', () => {
  test('render', () => {
    render(<NotFoundPage/>)
    expect(screen.getByText('Page is not found')).toBeInTheDocument()
  })
})
