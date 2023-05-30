import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {DetailsPage} from "pages/DetailsPage";

export enum AppRoutes {
    MAIN = 'main',
    DETAILS = 'details'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS]: '/details'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.DETAILS]: {
        path: RoutePath.details,
        element: <DetailsPage />
    }
}