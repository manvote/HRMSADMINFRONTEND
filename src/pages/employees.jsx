import React from "react";
// import Navbar from "../components/navbar";
import './employees.css';
import SearchBar from "../components/searchbar.jsx";


import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icon imports
import { FiBriefcase } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";


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

function Employees() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredUsers = employees.filter((emp) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(lowerCaseTerm) ||
      emp.id.toLowerCase().includes(lowerCaseTerm) ||
      emp.role.toLowerCase().includes(lowerCaseTerm) ||
      emp.dept.toLowerCase().includes(lowerCaseTerm) ||
      emp.location.toLowerCase().includes(lowerCaseTerm)
    );
  });
  return (
    <>
      <div className="">
        <div className="employee-div">
          <div className="page-heading">
            <div>
              <h1 className="subhead">Employee Directory</h1>
              <p className="subtitle">Manage and view all employee information</p>
            </div>

            <div className="top-actions">
              <button className="ghost">Bulk Upload</button>
              <button className="ghost">Export</button>
              <button className="primary" onClick={()=>{navigate('/addEmployee')}}>Add Employee</button>
            </div>
          </div>
          <div className="empcard">
            <EmployeeCard
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
            <EmployeeGrid

              filteredUsers={filteredUsers}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function EmployeeCard({ searchTerm, setSearchTerm, showFilters, setShowFilters }) {

  return (
    <div>
      <div className="container-fluid filterbar">
        <input className="filter-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search employees by name, ID, or email..." />
        <div className="filter-actions">
          <select className="sort-select">
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
          </select>

          <button
            className={`icon-small ${showFilters}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
          </button>
          <label className="selectall">
            <input type="radio" className="input" /> Select All
          </label>
        </div>
      </div>
      <div>
        {showFilters && (
          <div className="quick-filters">
            <p className="mb-0 ps-4">Quick Filter :</p>
            <select className="quick-select">
              <option>All Department</option>
              <option>Department</option>
            </select>
            <select className="qick-select">
              <option>All Location</option>
              <option>Department</option>
            </select>
            <select className="quick-select">
              <option>All Status</option>
              <option>Status</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
function EmployeeGrid({ filteredUsers }) {
  const navigate = useNavigate();
  return (
    <div className="employee-grid">

      {filteredUsers.length > 0 ? (filteredUsers.map(emp => (
        <div key={emp.id} className="employee-card">
          <div className="top-color"></div>
          <div className="card-content">
            <div className="card-top">
              <div className="check-box">
                <input type="radio" className="input" />
              </div>
              <div className="avatar-wrap">
                <img src={emp.avatar} alt={emp.name} />
              </div>
              <div className="employee-info">
                <h3 className="employee-name">{emp.name}</h3>
                <p className="employee-role">{emp.role}</p>
              </div>
              <div className="d-flex ms-auto">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="badges">
              <div className={`badge status-badge ${emp.status === "On Leave" ? "active-status" : " "}`}>
                {emp.status}</div>
              <div className="badge dept-badge">
                {emp.dept}
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-2"><FiBriefcase className="icon1 align-center" /> <span className="id align-center">ID:<span className="ps-2">{emp.id}</span></span></p>
              <p className="employee-location"><SlLocationPin className="icon1" /><span className="id ps-1">{emp.location}</span></p>
            </div>
            <div className="card-bottom">
              <button
                className="primary view-button"
                onClick={() =>  navigate(`/viewEmployee/${emp.id}`) }
              > <MdOutlineRemoveRedEye className="view-icon me-3" />View </button>
              <button className="ghost edit-button"><FaRegEdit className="edit-icon me-3" />Edit</button>
            </div>
          </div>
        </div>
      ))) : (<p className="no-results">No employees found.</p>)}
    </div>
  );
};
export default Employees;