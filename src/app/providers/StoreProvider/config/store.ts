import { configureStore, type EnhancedStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { $api } from 'shared/api/api'
import { characterDetailsReducer } from 'entities/Character'
import { charactersPageReducer } from 'pages/CharactersPage/model/slices/charactersPageSlice'

export function createReduxStore (initialState?: StateSchema): EnhancedStore<StateSchema> {
  return configureStore({
    reducer: {
      characterDetails: characterDetailsReducer,
      charactersPage: charactersPageReducer
    },
    devTools: _IS_DEV_,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
