import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss';

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
}
