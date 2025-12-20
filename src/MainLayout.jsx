import Navbar from './components/navbar';
import SearchBar from './components/searchbar';
import { Outlet } from 'react-router-dom';
import './App.css';

function MainLayout() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <div>
                <SearchBar />
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
