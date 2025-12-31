import React from "react";
import "./navbar.css";
import SVG from "../assets/hr-icon.png";
import { Routes, Route,Link } from "react-router-dom";
import { useState } from "react";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { FiBriefcase } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";



function Navbar() {

   const menuItems = [
    { name: "Dashboard", icon: <MdOutlineDashboard /> ,path: "/" },
    { name: "Employees", icon: <IoPersonOutline />,path: "/employee" },
    { name: "Attendance", icon: <LuClock4 />, path: "/attendance" },
    { name: "Leave", icon: <FiCalendar />, path: "/leave" },
    { name: "Payroll", icon: <LuWallet />, path: "/payroll" },
    { name: "Performance", icon: <GrDocumentPerformance />, path:"/perfomance"},
    { name: "Recruitment", icon: <FiBriefcase />, path:"/recuritments" },
    {name: "Documents",icon: <GrDocumentText />, path:"/document"},
    {name: "Tickets" ,icon:<LuTicket />, path:"/tickets"},
    {name: "Reports", icon : <FaRegChartBar />, path:"/reports"},
    {name: "Settings", icon : <IoSettingsOutline />, path:"/settings"}
  ];

  const [Active, SetActive]= useState()
  return (

    <>
    <nav className="sidebar toggle-menu">
      <div className="sidebar-header">
        <div className="profile-icon"> 
          <img src={SVG} />
        </div>
        <div>
          <p className="heading">HR Portal</p>
          <p className="access">Admin Dashboard</p>
        </div>
      </div>

      <ul className="menu ">
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className={item.name === Active ? "menu-item active" : "menu-item"}
            onClick={() => SetActive(item.name)}
          >
            <span>{item.icon}</span><Link to={item.path} className="navfont">{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="signout">
        <span>
          <PiSignOutBold />
        </span> Sign Out
      </div>
    </nav>
    </>
  );
}

export default Navbar;