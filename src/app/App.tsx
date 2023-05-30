import {Suspense} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {DetailsPage} from "pages/DetailsPage";
import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>Details page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<DetailsPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}
