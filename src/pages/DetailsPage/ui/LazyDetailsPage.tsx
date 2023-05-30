import { lazy } from "react";

// this is just an example component to check loader style
export const LazyDetailsPage = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./DetailsPage')), 1500)
        }
    )
)
