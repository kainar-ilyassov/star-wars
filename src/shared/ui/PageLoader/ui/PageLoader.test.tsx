import { render } from '@testing-library/react'
import { PageLoader } from 'shared/ui/PageLoader'

describe('PageLoader', () => {
  test('render test', () => {
    const { container } = render(<PageLoader/>)
    expect(container.firstChild).toBeInTheDocument()
  })
})
