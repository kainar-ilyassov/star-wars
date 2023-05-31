import { lazy } from 'react'

// this is just an example component to check loader style
export const LazyMainPage = lazy(
  async () => await new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      resolve(import('./MainPage'))
    }, 1500)
  }
  )
)
