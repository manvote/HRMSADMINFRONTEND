import React from "react";
import "../pages/employees.jsx"
import { useParams } from "react-router-dom";
import "./viewEmployee.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import icon
import { SlLocationPin } from "react-icons/sl";
import { FiBriefcase } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { MdHomeWork } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import {FaRegEdit} from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlinePersonAddDisabled } from "react-icons/md";


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

//salary TAB
const salaryCards = [
    { label: "Annual CTC", value: "₹18,00,000", highlight: true },
    { label: "Basic Pay", value: "₹75,000" },
    { label: "Allowances", value: "₹25,000" },
    { label: "Bonus", value: "₹50,000" },
];

//Document TAB
const documents = [
    {
        name: "Resume.pdf",
        type: "Resume",
        date: "2022-03-10",
        size: "2.4 MB",
    },
    {
        name: "Aadhar_Card.pdf",
        type: "ID Proof",
        date: "2022-03-10",
        size: "1.2 MB",
    },
    {
        name: "Offer_Letter.pdf",
        type: "Offer Letter",
        date: "2022-03-15",
        size: "856 KB",
    },
    {
        name: "Experience_Certificate.pdf",
        type: "Experience",
        date: "2022-03-10",
        size: "1.8 MB",
    },
];


//Attendance TAB

const summary = [
    { label: "Present", value: 22, className: "present" },
    { label: "Absent", value: 1, className: "absent" },
    { label: "Leave", value: 2, className: "leave" },
    { label: "WFH", value: 3, className: "wfh" },
];

const records = [
    {
        date: "2024-12-01",
        status: "Present",
        checkIn: "9:02 AM",
        checkOut: "6:15 PM",
    },
    {
        date: "2024-12-02",
        status: "Present",
        checkIn: "8:55 AM",
        checkOut: "6:30 PM",
    },
    {
        date: "2024-12-03",
        status: "WFH",
        checkIn: "9:10 AM",
        checkOut: "6:00 PM",
    },
    {
        date: "2024-12-04",
        status: "On Leave",
        checkIn: "-",
        checkOut: "-",
    },
];


// Leave TAB

const leaveSummary = [
    { title: "Casual Leave", used: 8, total: 12 },
    { title: "Sick Leave", used: 5, total: 6 },
    { title: "Comp-Off", used: 2, total: 2 },
];

const leaveHistory = [
    {
        from: "2024-11-15",
        type: "Casual Leave",
        to: "2024-11-16",
        appliedOn: "2024-11-16",
        status: "Approved",
    },
    {
        from: "2024-10-05",
        type: "Sick Leave",
        to: "2024-10-05",
        appliedOn: "2024-10-05",
        status: "Approved",
    },
    {
        from: "2024-09-20",
        type: "Casual Leave",
        to: "2024-09-22",
        appliedOn: "2024-09-22",
        status: "Approved",
    },
    {
        from: "2024-08-13",
        type: "Sick Leave",
        to: "2024-08-14",
        appliedOn: "2024-08-14",
        status: "Approved",
    },
];

// Perfomance TAB

const Perfomancesummary = [
    {
        title: "Overall Rating",
        value: "4.2",
        sub: "out of 5",
    },
    {
        title: "Goals Completed",
        value: "8",
        sub: "this year",
    },
    {
        title: "Last Appraisal",
        value: "Apr 2024",
        sub: "15% hike",
    },
];

const goals = [
    {
        title: "Complete Q4 Project Deliverables",
        percent: 85,
        status: "On Track",
    },
    {
        title: "Mentor 2 Junior Developers",
        percent: 100,
        status: "Completed",
    },
    {
        title: "AWS Certification",
        percent: 70,
        status: "In Progress",
    },
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
        icon: <FiBriefcase />,
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

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="view-container">
                <div className="container-fluid view-navigation pe-4">
                    <div>
                        <img src={employee.avatar} alt={employee.name} />
                    </div>
                    <div className="view-content">
                        <div className="view-name d-flex m-0">{employee.name}
                            <span>
                                <div className="status-div"><p className="status mb-0">{employee.status}</p></div>
                            </span>
                        </div>
                        <p className="view1 mb-0 ">{employee.role}</p>
                        <p className="view1 mb-0 pt-2"><SlLocationPin className="icon1" /> {employee.location}
                            <span className="ps-4"><FiBriefcase className="icon1 align-center" />{employee.dept}</span></p>
                    </div>
                    <div className="ms-auto">
                        <div className="btn-action">
                            <button className="edit-btn" onClick={() => navigate(`/editEmployee/${employee.id}`)}> 
                            <FaRegEdit className="edit-icon me-1" />Edit Profile</button>
                            <button className="rest-btn">
                                <IoKeyOutline className="rest-icon me-1"/>Reset Passowrd</button>
                            <button
                                className="offboard-btn"
                                onClick={() => navigate(`/offboarding/${employee.id}`)}>
                                <MdOutlinePersonAddDisabled className="offboard-icon me-1"/>
                                Offboard</button>
                        </div>

                    </div>
                </div>
                <Tablist activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    {activeTab === 1 && <Overview employee={employee} />}
                    {activeTab === 2 && <Jobs employee={employee} />}
                    {activeTab === 3 && <Salary employee={employee} />}
                    {activeTab === 4 && <Documents employee={employee} />}
                    {activeTab === 5 && <Attendance employee={employee} />}
                    {activeTab === 6 && <Leave employee={employee} />}
                    {activeTab === 7 && <Perfomance employee={employee} />}
                </div>
            </div>
        </>
    );
};

function Tablist({ activeTab, setActiveTab }) {

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
function Overview({ employee }) {

    const personalInfo = [
        { label: "Full Name", value: employee.name },
        { label: "Employee ID", value: employee.id },
        { label: "Date of Birth", value: employee.dob },
        { label: "Gender", value: employee.gender },
    ];

    const contactInfo = [
        { label: "Email", value: employee.email },
        { label: "Phone", value: employee.phone },
        { label: "Location", value: employee.location },
        { label: "Joining Date", value: employee.joiningDate },
    ];

    return (
        <div className="info-wrapper">
            <div className="info-card">
                <h3 className="info-title">Personal Information</h3>

                {personalInfo.map((item, index) => (
                    <div className="info-row" key={index}>
                        <span>{item.label}</span>
                        <span>{item.value || "-"}</span>
                    </div>
                ))}
            </div>

            <div className="info-card">
                <h3 className="info-title">Contact Information</h3>

                {contactInfo.map((item, index) => (
                    <div className="info-row" key={index}>
                        <span>{item.label}</span>
                        <span>{item.value || "-"}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

function Jobs({ employee }) {

    const jobDetailsLeft = [
        { label: "Department", value: employee.dept },
        { label: "Designation", value: employee.role },
        { label: "Location", value: employee.location },
        { label: "Reporting Manager", value: employee.rm },
    ];

    const jobDetailsRight = [
        { label: "Email", value: employee.email },
        { label: "Phone", value: employee.phone },
        { label: "Location", value: employee.location },
        { label: "Joining Date", value: employee.joiningDate },
    ];

    return (
        <div className="job-container">
            <div className="ps-3 pt-4">
                <h3 className="info-title mb-0">Job Details</h3>
            </div>

            <div className="job-wrapper">
                {/* Left Card */}
                <div className="job-card">
                    {jobDetailsLeft.map((item, index) => (
                        <div className="info-row" key={index}>
                            <span>{item.label}</span>
                            <span>{item.value || "-"}</span>
                        </div>
                    ))}
                </div>

                {/* Right Card */}
                <div className="job-card">
                    {jobDetailsRight.map((item, index) => (
                        <div className="info-row" key={index}>
                            <span>{item.label}</span>
                            <span>{item.value || "-"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

function Salary({ employee }) {
    return (
        <div className="salary-wrapper">
            <div className="salary-header">
                <h3>Salary Details</h3>
                <p>Last revision: 2024-04-01</p>
            </div>

            <div className="salary-cards">
                {salaryCards.map((item, index) => (
                    <div
                        key={index}
                        className={`salary-card ${item.highlight ? "highlight" : ""
                            }`}
                    >
                        <p className="label">{item.label}</p>
                        <h2 className="amount">{item.value}</h2>
                    </div>
                ))}
            </div>

            <button className="download-btn">
                <FiDownload />
                Download Salary Slips
            </button>
        </div>
    );
};

function Documents() {
    return (
        <div className="salary-doc-wrapper">
            <div className="salary-doc-header">
                <h2>Salary Details</h2>
                <button className="download-all-btn">
                    <FiDownload />
                    Download Salary Slips
                </button>
            </div>

            <table className="salary-doc-table">
                <thead>
                    <tr>
                        <th>Document Name</th>
                        <th>Type</th>
                        <th>Upload Date</th>
                        <th>Size</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index}>
                            <td className="doc-name">{doc.name}</td>
                            <td>{doc.type}</td>
                            <td>{doc.date}</td>
                            <td>{doc.size}</td>
                            <td>
                                <button className="download-link">
                                    <FiDownload />
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function Attendance() {
    return (
        <div className="attendance-wrapper">
            <div className="attendance-summary">
                {summary.map((item, index) => (
                    <div key={index} className="summary-card">
                        <p>{item.label}</p>
                        <h3 className={item.className}>{item.value}</h3>
                    </div>
                ))}
            </div>

            <div className="attendance-table-card">
                <h2>Recent Attendance</h2>

                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((row, index) => (
                            <tr key={index}>
                                <td>{row.date}</td>
                                <td>
                                    {row.status === "Present" && (
                                        <span className="attendance-badge present-badge">
                                            <FiCheckCircle /> Present
                                        </span>
                                    )}
                                    {row.status === "WFH" && (
                                        <span className="attendance-badge wfh-badge">
                                            <MdHomeWork /> WFH
                                        </span>
                                    )}
                                    {row.status === "On Leave" && (
                                        <span className="attendance-badge leave-badge">
                                            <FaRegCalendarMinus /> On Leave
                                        </span>
                                    )}
                                </td>
                                <td>{row.checkIn}</td>
                                <td>{row.checkOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function Leave() {
    return (
        <div className="leave-wrapper">
            <div className="leave-summary">
                {leaveSummary.map((item, index) => (
                    <div className="leave-card" key={index}>
                        <p>{item.title}</p>
                        <h3>
                            {item.used} <span>/ {item.total}</span>
                        </h3>
                    </div>
                ))}
            </div>

            <div className="leave-history-card">
                <h2>Leave History</h2>

                <table className="leave-table">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Leave Type</th>
                            <th>To</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaveHistory.map((leave, index) => (
                            <tr key={index}>
                                <td>{leave.from}</td>
                                <td>{leave.type}</td>
                                <td>{leave.to}</td>
                                <td>{leave.appliedOn}</td>
                                <td>
                                    <span className="status approved">
                                        <FiCalendar /> {leave.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function Perfomance() {
    return (
        <div className="performance-wrapper">
            <div className="summary-grid">
                {Perfomancesummary.map((item, index) => (
                    <div className="summary-card" key={index}>
                        <p className="summary-title">{item.title}</p>
                        <h2 className="summary-value">{item.value}</h2>
                        <p className="summary-sub">{item.sub}</p>
                    </div>
                ))}
            </div>
            <div className="goals-card">
                <h2 className="goals-title">Current Goals</h2>

                {goals.map((goal, index) => (
                    <div className="goal-row" key={index}>
                        <div className="goal-header">
                            <p>{goal.title}</p>
                            <span className={`goal-status ${goal.status.replace(" ", "").toLowerCase()}`}>
                                {goal.status}
                            </span>
                        </div>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${goal.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ViewEmployee;