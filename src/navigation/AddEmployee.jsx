import React from "react";
import "../pages/employees.jsx"
// import axios from "axios";
import "./AddEmployee.css";

import { IoPersonOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { LuUpload } from "react-icons/lu";


// import { useState, useEffect } from "react";


const personalFields = [
    { label: "Full Name", type: "text", required: true },
    { label: "Employee ID", type: "text" },
    { label: "Email Address", type: "email",  required: true },
    { label: "Phone Number", type: "text",  required: true },
    { label: "Gender", type: "select", options: ["Female", "Male"], value: "Female" },
    { label: "Date of Birth", type: "date", required: true },
];

const employmentFields = [
    { label: "Department", type: "select", options: ["Software Developer","Project Manager","HR"], required: true },
    { label: "Designation", type: "text",required: true },
    { label: "Employment Type", type: "select", options: ["Full Time", "Contract"] },
    { label: "Date of Joining", type: "date", required: true },
    { label: "Location", type: "select", options: ["Chennai", "Bangalore"] },
    { label: "Reporting Manager", type: "text", required: true },
];

const salaryFields = [
    { label: "CTC (Annual)", type: "number" },
    { label: "Basic Pay (Monthly)", type: "number" },
    { label: "Allowances (Monthly)", type: "number"},
    { label: "Deductions (Monthly)", type: "number"},
];

const documents = [
    "Resume / CV",
    "ID Proof",
    "Offer Letter",
    "Experience Certificate",
];

function AddEmployee() {

    // const [employees, setEmployees] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     Getemployees();
    // }, []);

    // const Getemployees = async () => {
    //     try {
    //         const response = await axios.post('https://hrmsbackend-ej88.onrender.com/api/employees',
    //             {
    //                 name: "Priya Sharma",
    //                 role: "HR Manager",
    //                 location: "Chennai",
    //                 dept: "HR",
    //                 status: "Active",
    //                 avatar: "https://i.pravatar.cc/150?img=65"
    //             },
    //             {headers: {'Content-Type': 'application/json',},}
    //         );
    //         setEmployees(response.data);
    //         console.log("hi");

    //     } catch (error) {
    //         setError(error);
    //     }
    // };
    return (
        <div className="edit-container">
            {/* Header */}
            <div className="edit-header">
                <h2>Add Employee Information</h2>
            </div>

            {/* Personal Info */}
            <Section title="Personal Information" icon={<IoPersonOutline />}>
                {personalFields.map((field, index) => (
                    <FormField key={index} {...field} />
                ))}
            </Section>

            {/* Employment Details */}
            <Section title="Employment Details" icon={<FiBriefcase />}>
                {employmentFields.map((field, index) => (
                    <FormField key={index} {...field} />
                ))}
            </Section>

            {/* Salary */}
            <Salary title="Salary & Compensation" icon={<LuWallet />}>
                {salaryFields.map((field, index) => (
                    <FormField key={index} {...field} />
                ))}
            </Salary>

            {/* Documents */}
            <section className="card">
                <div className="d-flex mb-3">
                    <p className="mb-1 icon"><GrDocumentText /></p>
                    <h3 className="card-title mb-0 ps-1">Documents</h3>
                </div>
                
                <div className="document-grid">
                    {documents.map((doc, index) => (
                        <div key={index} className="doc-box">
                        <div className="upload-icon"><LuUpload /></div>
                            {doc}
                        </div>
                    ))}
                </div>
            </section>

            {/* Buttons */}
            <div className="action-buttons">
                <button className="btn-primary">Save Changes</button>
                <button className="btn-secondary">Discard</button>
            </div>
        </div>
    );
};

function Section({ title, children, icon }) {
    return (
        <section className="card">
        <div className="d-flex mb-3">
            <p className="icon mb-1">{icon}</p>
            <h3 className="card-title mb-0 ps-1">{title}</h3> 
        </div>
        <div className="form-grid">{children}</div>
            
        </section>
    );
};

function Salary({ title, children, icon }) {
    return (
        <section className="card">
            <div className="d-flex mb-3">
            <p className="icon mb-1">{icon}</p>
            <h3 className="card-title mb-0 ps-1">{title}</h3> 
        </div>
        <div className="salary-grid">{children}</div>
        </section>
    );
};

function FormField({ label, type, options, value, required, disabled }) {
    return (
        <div className="form-group">
            <label>
                {label} {required && "*"}
            </label>

            {type === "select" ? (
                <select>
                    {options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                    ))}
                </select>
            ) : (
                <input type={type} defaultValue={value} disabled={disabled}  />
            )}
        </div>
    );
};

export default AddEmployee