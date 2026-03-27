import React from "react";
import './employees.css';
import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Icon imports
import { FiBriefcase } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";



const fullName = (emp) =>
  `${emp?.first_name || ""} ${emp?.last_name || ""}`.trim() || "-";
function Employees() {

  const navigate = useNavigate();

  const [employes, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get(
          "https://hrmsbackend-z1jz.onrender.com/api/employees/",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setEmployees([]);
      }
    };

    fetchEmployees();
  }, []);


  const term = (searchTerm || "").toLowerCase();

  const filteredUsers = employes.filter((emp) => {
    return (
      (emp.first_name ?? "").toLowerCase().includes(term) ||
      (emp.last_name ?? "").toLowerCase().includes(term) ||
      (emp.email ?? "").toLowerCase().includes(term) ||
      emp.id?.toString().includes(term)
    );
  });

  // .sort((a,z)=>{
  //   if (sortOrder === "asc") {
  //     return a.name.localeCompare(z.name);
  //   } else {
  //     return z.name.localeCompare(a.name);
  //   }
  // })

  const [department, setDepartment] = useState("ALL");
  const [location, setLocation] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const quickFilter = employes.filter((emp) => {
    return (
      (department === "ALL" || emp.department === department) &&
      (location === "ALL" || emp.location === location) &&
      (status === "ALL" || emp.status === status));
  });

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSelectAll = (checked) => {
    setSelected(checked ? filteredUsers.map(emp => emp.id) : []);
  };

  const handleSelectOne = (id) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  // ☑️ Select Single Card
  // const handleSelectOne = (id) => {
  //   setSelected((prev) =>
  //     prev.includes(id)
  //       ? prev.filter((x) => x !== id)
  //       : [...prev, id]
  //   );
  // };

  // ☑️ Delete Selected
  // const handleDeleteSelected = () => {
  //   setEmployees((prev) => prev.filter((emp) => !selected.includes(emp.id)));
  //   setSelected([]);
  // };

  return (
    <>
      <div className="emp-page">
        <div className="page-heading">
          <div>
            <h1 className="subhead">Employee Directory</h1>
            <p className="subtitle">Manage and view all employee information</p>
          </div>

          <div className="top-actions">
            <button className="ghost">Bulk Upload</button>
            <button className="ghost">Export</button>
            <button className="primary ghost-add" onClick={() => { navigate('/addEmployee') }}>Add Employee</button>
          </div>
        </div>
        <div className="empcard">
          <EmployeeCard
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            sortOrder={sortOrder}
            onSort={handleSort}
            onSelectAll={handleSelectAll}
            selectedCount={selected.length}
          // selectedCount={selected.length}
          // onDelete={handleDeleteSelected}
          />
          <EmployeeGrid
            selected={selected}
            onSelectOne={handleSelectOne}
            filteredUsers={filteredUsers}
          />
        </div>
      </div>
    </>
  );
}

function EmployeeCard({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  sortOrder,
  onSort,
  onSelectAll,
  selectedCount
}) {

  return (
    <div>
      <div className="container-fluid filterbar">
        <input className="filter-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search employees by name, ID, or email..." />
        <div className="filter-actions">
          <select className="sort-select" value={sortOrder} onChange={onSort}>
            <option value="asc">Name (A–Z)</option>
            <option value="desc">Name (Z–A)</option>
          </select>

          <button
            className={`icon-small ${showFilters}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
          </button>
          <label className="selectall">
            <input
              type="checkbox"
              className="input"
              checked={selectedCount > 0}
              onChange={(e) => onSelectAll(e.target.checked)}
            /> Select All
          </label>
        </div>
      </div>
      <div>
        {showFilters && (
          <div className="quick-filters">
            <p className="mb-0 ps-4">Quick Filter :</p>
            <select className="quick-select" onChange={(e) => setDepartment(e.target.value)}>
              <option value="ALL">All Department</option>
              <option>Department</option>
            </select>
            <select className="qick-select" onChange={(e) => setLocation(e.target.value)}>
              <option value="ALL">All Location</option>
              <option>Department</option>
            </select>
            <select className="quick-select" onChange={(e) => setStatus(e.target.value)}>
              <option value="ALL">All Status</option>
              <option>Status</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
function EmployeeGrid({ filteredUsers, selected, onSelectOne }) {
  const navigate = useNavigate();
  return (
    <div className="employee-grid">

      {filteredUsers.length > 0 ? (filteredUsers.map(emp => (
        <div key={emp.id} className="employee-card">
          <div className="top-color"></div>
          <div className="card-content">
            <div className="card-top">
              <div className="check-box">
                <input
                  type="checkbox"
                  checked={selected.includes(emp.id)}
                  onChange={() => onSelectOne(emp.id)}
                  className="input" />
              </div>
              <div className="avatar-wrap">
                <img src={emp.avatar || "https://i.pravatar.cc/150"} />
              </div>
              <div className="employee-info">
                <h3 className="employee-name">{fullName(emp)}</h3>
                <p className="employee-role">{emp.designation}</p>
              </div>
              <div className="d-flex ms-auto">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="badges">
              <div className={`badge status-badge ${emp.status === "ON_LEAVE" ? "active-status" : "status-badge "}`}>
                {emp.status}</div>
              <div className="badge dept-badge">
                {emp.department}
              </div>
            </div>
            <div className="employee-id">
              <p className="mb-2"><FiBriefcase className="icon1 align-center" /> <span className="id align-center">ID:<span className="ps-2">{emp.id}</span></span></p>
            </div>
            <div className="d-flex">
              <p className="employee-location"><SlLocationPin className="icon1" /><span className="id ps-1">{emp.location}</span></p>
            </div>
            <p className="mb-0 pb-1"><FiMail className="icon1" /><span className="id">{emp.email}</span></p>
            <p className="mb-0"><CiPhone className="icon1" /><span className="id">{emp.phone}</span></p>
            <div className="card-bottom">
              <button
                className="primary view-button"
                onClick={() => navigate(`/viewEmployee/${emp.id}`)}
              > <MdOutlineRemoveRedEye className="view-icon me-3" />View </button>
              <button
                className="ghost edit-button"
                onClick={() => navigate(`/editEmployee/${emp.id}`)}>
                <FaRegEdit className="edit-icon me-3" />Edit</button>
            </div>
          </div>
        </div>
      ))) : (<p className="no-results">No employees found.</p>)}
    </div>
  );
};
export default Employees;
