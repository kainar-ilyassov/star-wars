import { configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema): EnhancedStore<StateSchema> {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: _IS_DEV_,
    preloadedState: initialState
  })
}
