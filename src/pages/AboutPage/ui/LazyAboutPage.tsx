import { lazy } from "react";

// this is just an example component to check loader style
export const LazyAboutPage = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./AboutPage')), 1500)
        }
    )
)
