import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/router";
import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/details'}>Details page</Link>
            <AppRouter />
        </div>
    );
}
