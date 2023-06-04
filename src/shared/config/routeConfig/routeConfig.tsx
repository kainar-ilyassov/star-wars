import { type RouteProps } from 'react-router-dom'
import { CharactersPage } from 'pages/CharactersPage'
import { CharacterDetailsPage } from 'pages/CharacterDetailsPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
  CHARACTERS = 'characters',
  CHARACTER_DETAILS = 'character_details',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CHARACTERS]: '/',
  [AppRoutes.CHARACTER_DETAILS]: '/characters/', // :id
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CHARACTERS]: {
    path: RoutePath.characters,
    element: <CharactersPage/>
  },
  [AppRoutes.CHARACTER_DETAILS]: {
    path: RoutePath.character_details + ':id',
    element: <CharacterDetailsPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
}
