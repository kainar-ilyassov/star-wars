import { configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'

export function createReduxStore (initialState?: StateSchema): EnhancedStore<StateSchema> {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_,
    preloadedState: initialState
  })
}
