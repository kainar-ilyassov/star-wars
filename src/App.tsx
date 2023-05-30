import {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "./theme/useTheme";
import {LazyMainPage} from "./pages/MainPage/LazyMainPage";
import {LazyDetailsPage} from "./pages/DetailsPage/LazyDetailsPage";
import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>Details page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<LazyMainPage />} />
                    <Route path={'/about'} element={<LazyDetailsPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
