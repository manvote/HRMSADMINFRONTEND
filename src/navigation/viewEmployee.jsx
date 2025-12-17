import React from "react";
import "../pages/employees.jsx"
import { useParams } from "react-router-dom";
import "./viewEmployee.css";

import { useState } from "react";

//import icon
import { SlLocationPin } from "react-icons/sl";
import { FiBriefcase } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";

//employee data
const employees = [
    { id: "EMP003", name: "Anita Desai", role: "Finance Lead", location: "Mumbai", dept: "Finance", status: "Active", avatar: "https://i.pravatar.cc/150?img=47" },
    { id: "EMP006", name: "Arjun Mehta", role: "DevOps Engineer", location: "Bangalore", dept: "Tech", status: "Active", avatar: "https://i.pravatar.cc/150?img=12" },
    { id: "EMP007", name: "Kavya Reddy", role: "HR Executive", location: "Hyderabad", dept: "HR", status: "Active", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: "EMP001", name: "Priya Sharma", role: "HR Manager", location: "Chennai", dept: "HR", status: "Active", avatar: "https://i.pravatar.cc/150?img=65" },
    { id: "EMP002", name: "Rahul Verma", role: "Senior Developer", location: "Bangalore", dept: "Tech", status: "Active", avatar: "https://i.pravatar.cc/150?img=15" },
    { id: "EMP008", name: "Rohan Kumar", role: "Accountant", location: "Chennai", dept: "Finance", status: "On Leave", avatar: "https://i.pravatar.cc/150?img=30" },
    { id: "EMP005", name: "Sneha Patel", role: "Operations Manager", location: "Remote", dept: "Operations", status: "Active", avatar: "https://i.pravatar.cc/150?img=33" },
    { id: "EMP004", name: "Vikram Singh", role: "Marketing Head", location: "Hyderabad", dept: "Marketing", status: "Active", avatar: "https://i.pravatar.cc/150?img=20" }
];

//Tablist
const tabList = [
    {
        id: 1,
        name: "Overview",
        icon: <IoPersonOutline />,
        status: "Active",
    },
    {
        id: 2,
        name: "Jobs",
        icon: <FiBriefcase/>,
        status: "Active",
    },
    {
        id: 3,
        name: "salary",
        icon: <FiCalendar />,
        status: "Active",
    },
    {
        id: 4,
        name: "Documents",
        icon: <LuWallet />,
        status: "Active",
    },
    {
        id: 5,
        name: "Attendance",
        icon: <GrDocumentPerformance />,
        status: "Active",
    },
    {
        id: 6,
        name: "Leave",
        icon: <GrDocumentText />,
        status: "Active",
    },
    {
        id: 7,
        name: "Perfomance",
        icon: <LuTicket />,
        status: "Active",
    }
];
function ViewEmployee() {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return <div>Employee not found</div>;
    }
    return (
        <>
            <div className="view-container">
                <div className="container-fluid view-navigation pe-4">
                    <div>
                        <img src={employee.avatar} alt={employee.name} />
                    </div>
                    <div className="view-content">
                        <p className="view-name d-flex m-0">{employee.name}
                            <span>
                                <div className="status-div"><p className="status mb-0">{employee.status}</p></div>
                            </span>
                        </p>
                        <p className="view1 mb-0 ">{employee.role}</p>
                        <p className="view1 mb-0 pt-2"><SlLocationPin className="icon1" /> {employee.location}
                            <span className="ps-4"><FiBriefcase className="icon1 align-center" />{employee.dept}</span></p>
                    </div>
                    <div className="ms-auto">
                    <div className="btn-action">
                        <button className="edit-btn">Edit Profile</button>
                        <button className="rest-btn">Reset Passowrd</button>
                        <button className="offboard-btn">Offboard</button>
                    </div>
                        
                    </div>
                </div>
                <Tablist />
            </div>
        </>
    );
};

function Tablist() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="tablist-container d-flex">
            {tabList.map((tab) => (
                <div key={tab.id} className={` ${activeTab === tab.id ? "tab-active" : "tab-inactive"}`} onClick={() => setActiveTab(tab.id)}>
                    <div className="tab-icon">{tab.icon}</div>
                    <div className="tab-name">{tab.name}</div>
                </div>
            ))}
        </div>
    );
}

export default ViewEmployee;