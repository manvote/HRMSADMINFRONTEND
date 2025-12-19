// import React from "react";
// import "../pages/employees.jsx"
// import { useParams } from "react-router-dom";
// import "./AddEmployee.css";

// import { useState } from "react";

// //import icon
// import { IoPersonOutline } from "react-icons/io5";
// import { FiBriefcase } from "react-icons/fi";
// import { LuWallet } from "react-icons/lu";
// import { GrDocumentText } from "react-icons/gr";
// import { LuUpload } from "react-icons/lu";

// const employees = [
//     { id: "EMP003", name: "Anita Desai", role: "Finance Lead", location: "Mumbai", dept: "Finance", status: "Active", avatar: "https://i.pravatar.cc/150?img=47" },
//     { id: "EMP006", name: "Arjun Mehta", role: "DevOps Engineer", location: "Bangalore", dept: "Tech", status: "Active", avatar: "https://i.pravatar.cc/150?img=12" },
//     { id: "EMP007", name: "Kavya Reddy", role: "HR Executive", location: "Hyderabad", dept: "HR", status: "Active", avatar: "https://i.pravatar.cc/150?img=5" },
//     { id: "EMP001", name: "Priya Sharma", role: "HR Manager", location: "Chennai", dept: "HR", status: "Active", avatar: "https://i.pravatar.cc/150?img=65" },
//     { id: "EMP002", name: "Rahul Verma", role: "Senior Developer", location: "Bangalore", dept: "Tech", status: "Active", avatar: "https://i.pravatar.cc/150?img=15" },
//     { id: "EMP008", name: "Rohan Kumar", role: "Accountant", location: "Chennai", dept: "Finance", status: "On Leave", avatar: "https://i.pravatar.cc/150?img=30" },
//     { id: "EMP005", name: "Sneha Patel", role: "Operations Manager", location: "Remote", dept: "Operations", status: "Active", avatar: "https://i.pravatar.cc/150?img=33" },
//     { id: "EMP004", name: "Vikram Singh", role: "Marketing Head", location: "Hyderabad", dept: "Marketing", status: "Active", avatar: "https://i.pravatar.cc/150?img=20" }
// ];

// const personalFields = [
//     { label: "Full Name", type: "text", required: true },
//     { label: "Employee ID", type: "text" },
//     { label: "Email Address", type: "email",  required: true },
//     { label: "Phone Number", type: "text",  required: true },
//     { label: "Gender", type: "select", options: ["Female", "Male"], value: "Female" },
//     { label: "Date of Birth", type: "date", required: true },
// ];

// const employmentFields = [
//     { label: "Department", type: "select", options: ["Software Developer","Project Manager","HR"], required: true },
//     { label: "Designation", type: "text",required: true },
//     { label: "Employment Type", type: "select", options: ["Full Time", "Contract"] },
//     { label: "Date of Joining", type: "date", required: true },
//     { label: "Location", type: "select", options: ["Chennai", "Bangalore"] },
//     { label: "Reporting Manager", type: "text", required: true },
// ];

// const salaryFields = [
//     { label: "CTC (Annual)", type: "number" },
//     { label: "Basic Pay (Monthly)", type: "number" },
//     { label: "Allowances (Monthly)", type: "number"},
//     { label: "Deductions (Monthly)", type: "number"},
// ];

// const documents = [
//     "Resume / CV",
//     "ID Proof",
//     "Offer Letter",
//     "Experience Certificate",
// ];

// const employeeData=()=>{
//     const { id } = useParams();
//     const employee = employees.find((emp) => emp.id === id);
//     return employee;
// }

// function EditEmployee  () {

//     return (
//         <>
//        <div className="edit-container">
//                    {/* Header */}
//                    <div className="edit-header">
//                        <h2>Add Employee Information</h2>
//                    </div>

//                    {/* Personal Info */}
//                    <Section title="Personal Information" icon={<IoPersonOutline />}>
//                        {personalFields.map((field, index) => (
//                            <FormField key={index} {...field} />
//                        ))}
//                    </Section>

//                    {/* Employment Details */}
//                    <Section title="Employment Details" icon={<FiBriefcase />}>
//                        {employmentFields.map((field, index) => (
//                            <FormField key={index} {...field} />
//                        ))}
//                    </Section>

//                    {/* Salary */}
//                    <Salary title="Salary & Compensation" icon={<LuWallet />}>
//                        {salaryFields.map((field, index) => (
//                            <FormField key={index} {...field} />
//                        ))}
//                    </Salary>

//                    {/* Documents */}
//                    <section className="card">
//                        <div className="d-flex mb-3">
//                            <p className="mb-1 icon"><GrDocumentText /></p>
//                            <h3 className="card-title mb-0 ps-1">Documents</h3>
//                        </div>

//                        <div className="document-grid">
//                            {documents.map((doc, index) => (
//                                <div key={index} className="doc-box">
//                                <div className="upload-icon"><LuUpload /></div>
//                                    {doc}
//                                </div>
//                            ))}
//                        </div>
//                    </section>

//                    {/* Buttons */}
//                    <div className="action-buttons">
//                        <button className="btn-primary">Save Changes</button>
//                        <button className="btn-secondary">Discard</button>
//                    </div>
//                </div>
//                </>
//            );

//        };

//        function Section({ title, employee, children, icon }) {
//            return (
//                <section className="card">
//                <div className="d-flex mb-3">
//                    <p className="icon mb-1">{icon}</p>
//                    <h3 className="card-title mb-0 ps-1">{title}</h3> 
//                </div>
//                <div className="form-grid">{children}</div>

//                </section>
//            );
//        };

//        function Salary({ title, children, icon }) {
//            return (
//                <section className="card">
//                    <div className="d-flex mb-3">
//                    <p className="icon mb-1">{icon}</p>
//                    <h3 className="card-title mb-0 ps-1">{title}</h3> 
//                </div>
//                <div className="salary-grid">{children}</div>
//                </section>
//            );
//        };

//        function FormField({ label, type, options, value, required, disabled }) {
//            return (
//                <div className="form-group">
//                    <label>
//                        {label} {required && "*"}
//                    </label>

//                    {type === "select" ? (
//                        <select>
//                            {options.map((opt, i) => (
//                                <option key={i}>{opt}</option>
//                            ))}
//                        </select>
//                    ) : (
//                        <input type={type} defaultValue={employeeData()} disabled={disabled}  />
//                    )}
//                </div>
//            );
//        };

// export default EditEmployee

import React from "react";
import { useParams } from "react-router-dom";
import "./AddEmployee.css";

// Icons
import { IoPersonOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { LuWallet, LuUpload } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";

/* ================= EMPLOYEE DATA ================= */

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

/* ================= FIELD CONFIG ================= */

const personalFields = [
  { label: "Full Name", name: "name", type: "text", required: true },
  { label: "Employee ID", name: "id", type: "text", disabled: true },
  { label: "Email Address", name: "email", type: "email" },
  { label: "Phone Number", name: "phone", type: "text" },
  {
    label: "Gender",
    name: "gender",
    type: "select",
    options: ["Female", "Male"],
  },
];

const employmentFields = [
  { label: "Department", name: "dept", type: "text" },
  { label: "Designation", name: "role", type: "text" },
  {
    label: "Location",
    name: "location",
    type: "select",
    options: ["Mumbai", "Bangalore", "Chennai"],
  },
];

const salaryFields = [
  { label: "CTC (Annual)", name: "ctc", type: "number" },
  { label: "Basic Pay (Monthly)", name: "basic", type: "number" },
  { label: "Allowances (Monthly)", name: "allowance", type: "number" },
  { label: "Deductions (Monthly)", name: "deduction", type: "number" },
];

const documents = [
  "Resume / CV",
  "ID Proof",
  "Offer Letter",
  "Experience Certificate",
];

/* ================= MAIN COMPONENT ================= */

function EditEmployee() {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return <p style={{ padding: 20 }}>Employee not found</p>;
  }

  return (
    <div className="edit-container">
      <div className="edit-header">
        <h2>Edit Employee Information</h2>
      </div>

      <Section title="Personal Information" icon={<IoPersonOutline />}>
        {personalFields.map((field, index) => (
          <FormField key={index} field={field} employee={employee} />
        ))}
      </Section>

      <Section title="Employment Details" icon={<FiBriefcase />}>
        {employmentFields.map((field, index) => (
          <FormField key={index} field={field} employee={employee} />
        ))}
      </Section>

      <Salary title="Salary & Compensation" icon={<LuWallet />}>
        {salaryFields.map((field, index) => (
          <FormField key={index} field={field} employee={{}} />
        ))}
      </Salary>

      <section className="card">
        <div className="d-flex mb-3">
          <p className="icon mb-1">
            <GrDocumentText />
          </p>
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

      <div className="action-buttons">
        <button className="btn-primary">Save Changes</button>
        <button className="btn-secondary">Discard</button>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, icon, children }) {
  return (
    <section className="card">
      <div className="d-flex mb-3">
        <p className="icon mb-1">{icon}</p>
        <h3 className="card-title mb-0 ps-1">{title}</h3>
      </div>
      <div className="form-grid">{children}</div>
    </section>
  );
}

function Salary({ title, icon, children }) {
  return (
    <section className="card">
      <div className="d-flex mb-3">
        <p className="icon mb-1">{icon}</p>
        <h3 className="card-title mb-0 ps-1">{title}</h3>
      </div>
      <div className="salary-grid">{children}</div>
    </section>
  );
}

function FormField({ field, employee }) {
  const { label, name, type, options, required, disabled } = field;

  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>

      {type === "select" ? (
        <select defaultValue={employee[name] || ""}>
          <option value="">Select</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          defaultValue={employee[name] || ""}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default EditEmployee;
