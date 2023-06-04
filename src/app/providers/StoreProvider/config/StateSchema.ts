import { type AxiosInstance } from 'axios'
import { type CharacterDetailsSchema } from 'entities/Character'
import { type CharactersPageSchema } from 'pages/CharactersPage'

export interface StateSchema {
  characterDetails: CharacterDetailsSchema
  charactersPage: CharactersPageSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
