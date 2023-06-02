import { type ReactNode } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}): RenderResult {
  const {
    route = '/',
    initialState
  } = options

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </StoreProvider>
  )
}
