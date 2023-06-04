import { type Character } from 'entities/Character'

export interface CharacterDetailsSchema {
  isLoading: boolean
  error?: string
  data?: Character
}
