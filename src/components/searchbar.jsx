import React from "react";

import "./searchbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


import { FiSearch } from "react-icons/fi";
function SearchBar() {
    return (

        <nav className="navbar navbar-expand-lg  searchbar-nav position-sticky">
            <div className="container-fluid ">
                <div className="search-bar">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <button className="nav-button"><IoIosNotificationsOutline className="notification-icon" /></button>
                <button className="nav-button"><IoSettingsOutline className="notification-icon" /></button>

            </div>
        </nav>

    );
}

export default SearchBar;