import React from "react";
import "../pages/employees.jsx"
import axios from "axios";

import { IoPersonOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { LuUpload } from "react-icons/lu";


import { useState } from "react";


const personalFields = [
    { label: "First Name", type: "text", required: true, name: "first_name" },
    { label: "Last Name", type: "text", required: true, name: "last_name" },
    { label: "Employee ID", type: "text", required: true, name: "employee_code" },
    { label: "Email Address", type: "email", required: true, name: "email" },
    { label: "Phone Number", type: "text", required: true, name: "phone" },
    { label: "Gender", type: "select", options: ["FEMALE", "MALE"], name: "gender" },
    { label: "Date of Birth", type: "date", required: true, name: "date_of_birth" },
];

const employmentFields = [
    { label: "Department", type: "select", options: ["IT", "HR", "Finance", "Operations"], required: true, name: "department" },
    { label: "Designation", type: "text", required: true, name: "designation" },
    { label: "Employment Type", type: "select", options: ["FULL_TIME", "CONTRACT"], name: "employee_type" },
    { label: "Date of Joining", type: "date", required: true, name: "date_of_joining" },
    { label: "Location", type: "select", options: ["Chennai", "Bangalore"], name: "location" },
    { label: "Reporting Manager", type: "text", name: "reporting_manager_name" },
];

const salaryFields = [
    { label: "CTC (Annual)", type: "number", name: "annual_ctc" },
    { label: "Basic Pay (Monthly)", type: "number", name: "basic_pay" },
    { label: "Allowances (Monthly)", type: "number", name: "allowances" },
    { label: "Deductions (Monthly)", type: "number", name: "deductions" },
];

const documents = [
    "Resume / CV",
    "ID Proof",
    "Offer Letter",
    "Experience Certificate",
];

function AddEmployee() {

    const [formData, setFormData] = useState({
        employee_code: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "MALE",
        date_of_birth: "",
        department: "",
        designation: "",
        employee_type: "FULL_TIME",
        date_of_joining: "",
        location: "",
        reporting_manager_name: "",
        annual_ctc: "",
        basic_pay: "",
        allowances: "",
    });

    const [error, setError] = useState(null);
    const [message, setMessage] = useState()
    const access = localStorage.getItem('access');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post(
                "https://hrmsbackend-ej88.onrender.com/api/employees/",
                data,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${access}`,
                    },
                }
            );

            console.log("Employee Created:", response.data);
            setMessage("Employee added successfully!");
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Failed to add employee");
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F8FF] p-6 justify-center">
            {/* Header */}
            <div className="text-[23px] font-bold text-[#00214D] ">
                <span>Add Employee Information</span>
            </div>

            {/* Personal Info */}
            <Section title="Personal Information" icon={<IoPersonOutline />}>
                {personalFields.map((field, index) => (
                    <FormField
                        key={index}
                        {...field}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />

                ))}
            </Section>

            {/* Employment Details */}
            <Section title="Employment Details" icon={<FiBriefcase />}>
                {employmentFields.map((field, index) => (
                    <FormField key={index} {...field} onChange={handleChange} value={formData[field.name]} />
                ))}
            </Section>

            {/* Salary */}
            <Salary title="Salary & Compensation" icon={<LuWallet />}>
                {salaryFields.map((field, index) => (
                    <FormField key={index} {...field} onChange={handleChange} value={formData[field.name]} />
                ))}
            </Salary>

            {/* Documents */}
            <section className="bg-white rounded-[10px] p-5 mb-6 shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
                <div className="flex items-center mb-4 gap-2">
                    <span className="mb-1 icon"><GrDocumentText /></span>
                    <span className="text-[23px] font-bold">Documents</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {documents.map((doc, index) => (
                        <div key={index} className="doc-box">
                            <div className="upload-icon"><LuUpload /></div>
                            {doc}
                        </div>
                    ))}
                </div>
            </section>

            {/* Buttons */}
            <div className="py-2 text-[22px] font-bold text-green-700">{message}</div>

            <div className="flex flex-col md:flex-row gap-3 mt-4">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow-md text-sm font-medium"
                >
                    Save Changes
                </button>

                <button className="bg-white border border-[#cbd5f5] text-slate-700 px-5 py-2.5 shadow-md rounded text-sm font-medium hover:bg-slate-100">
                    Discard
                </button>
            </div>

        </div>
    );
};

function Section({ title, children, icon }) {
  return (
    <section className="bg-white rounded-[10px] p-6 mb-6 shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
      <div className="flex items-center mb-4 gap-2">
        {/* <span className="text-blue-600">{icon}</span> */}
        <span className="text-[23px] font-bold">{title}</span>
      </div>
      <div><span className="text-[#667C99] text-[13px]">{}</span></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
}

function Salary({ title, children, icon }) {
    return (
        <section className="bg-white rounded-[10px] p-6 mb-6 shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
            <div className="flex items-center mb-4 gap-2">
                {/* <img className="text-blue-600" src={icon} /> */}
                <span className="text-[23px] font-bold">{title}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">{children}</div>
        </section>
    );
};


function FormField({ label, type, options = [], value, required, name, onChange }) {
    return (
        <div className="flex flex-col">
            <label className="text-[13px] text-[#00214d] mb-2">
                {label} {required && "*"}
            </label>

            {type === "select" ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="h-10 rounded-md border-[1px] border-[#EDF0F7] bg-[#F5F8FF] px-3 text-sm
          focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                    <option value="">Select</option>
                    {options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="h-10 rounded-md border border-[#edf0f7] bg-[#f5f8ff] px-3 text-sm
          focus:outline-none focus:border-blue-600 focus:bg-white"
                />
            )}
        </div>
    );
}


export default AddEmployee