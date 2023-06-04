import { type StateSchema } from 'app/providers/StoreProvider'
import { type Character } from 'entities/Character'

export const getCharacterDetailsData = (state: StateSchema): Character | undefined => state.characterDetails?.data
export const getCharacterDetailsIsLoading = (state: StateSchema): boolean => state.characterDetails.isLoading
export const getCharacterDetailsError = (state: StateSchema): string | undefined => state.characterDetails.error
