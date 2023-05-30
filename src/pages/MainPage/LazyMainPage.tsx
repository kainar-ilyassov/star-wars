import { lazy } from "react";

// this is just an example component to check loader style
export const LazyMainPage = lazy(
    () => new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./MainPage')), 1500)
        }
    )
)
