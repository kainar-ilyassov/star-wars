import { type StateSchema } from 'app/providers/StoreProvider'
import { type Character } from 'entities/Character'

export const getCharactersPageIsLoading = (state: StateSchema): boolean => state.charactersPage.isLoading
export const getCharactersPageError = (state: StateSchema): string | undefined => state.charactersPage.error
export const getTotalCharacters = (state: StateSchema): number | undefined => state.charactersPage.data?.count
export const getCharactersList = (state: StateSchema): Character[] | undefined => state.charactersPage.data?.results
