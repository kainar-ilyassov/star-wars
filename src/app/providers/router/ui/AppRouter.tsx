import React, { type ReactElement, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

export const AppRouter = (): ReactElement => {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }) => (
                  <Route key={path} path={path} element={element}/>
              ))}
          </Routes>
      </Suspense>
  )
}
