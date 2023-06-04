import { lazy } from 'react'

export const CharactersPageAsync = lazy(async () => await import('./CharactersPage'))
