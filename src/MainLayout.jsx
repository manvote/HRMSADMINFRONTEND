import Navbar from './components/navbar';
import SearchBar from './components/searchbar';
import { Outlet } from 'react-router-dom';
import './App.css';
// import './Mainlayout.css';

function MainLayout() {
    return (
        <div className="App">
            <div>
                <Navbar />

            </div>
            <div className="">
                <SearchBar />
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
