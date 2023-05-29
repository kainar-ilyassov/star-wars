import {Sidebar} from "./components/Sidebar/Sidebar";
import {Navbar} from "./components/Navbar/Navbar";
import './index.scss';
export const App = () => {
    return (
        <div className='app'>
            <Sidebar />
            <Navbar />
        </div>
    )
}