import { type Character } from 'entities/Character'

export interface CharactersPageInfo {
  count: number
  next: string
  previous: string
  results: Character[]
}

export interface CharactersPageSchema {
  isLoading: boolean
  error?: string
  data?: CharactersPageInfo
}
