import React from "react";
import "../pages/employees.jsx"
import { useParams } from "react-router-dom";
import "./EditEmployee.css";
import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import icon
import { IoPersonOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { LuUpload } from "react-icons/lu";

const personalInfoFields = [
  { label: "First Name", name: "first_name", valueKey: "first_name" },
  { label: "Last Name", name: "last_name", valueKey: "last_name" },
  { label: "Employee ID", name: "employee_code", valueKey: "employee_code", disabled: true },
  { label: "Email", name: "email", valueKey: "email" },
  { label: "Phone", name: "phone", valueKey: "phone" },
  { label: "Gender", name: "gender", valueKey: "gender" },
  { label: "Date of Birth", name: "dob", type: "date", valueKey: "date_of_birth" },
];

const employmentFields = [
  { label: "Designation", name: "designation", valueKey: "designation" },
  { label: "Department", name: "department", valueKey: "department" },
  { label: "Location", name: "location", valueKey: "location" },
  { label: "Date of Joining", name: "date_of_joining", type: "date", valueKey: "date_of_joining" },
];


const salaryFields = [
  { label: "CTC (Annual)", type: "number", valueKey: "annual_ctc" },
  { label: "Basic Pay (Monthly)", type: "number", valueKey: "basic_pay" },
  { label: "Allowances (Monthly)", type: "number", valueKey: "allowances" },
  { label: "Deductions (Monthly)", type: "number", valueKey: "deductions" },
];

const documents = [
  "Resume / CV",
  "ID Proof",
  "Offer Letter",
  "Experience Certificate",
];


function EditEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [emp_id, setEmployeeID] = useState(id);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(
          `https://hrmsbackend-ej88.onrender.com/api/employees/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        setFormData(res.data);
        setEmployeeID(res.data.employee_code);
        console.log(res.data);

      } catch (err) {
        console.error(err);
        alert("Failed to load employee data");
      }
      finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `https://hrmsbackend-ej88.onrender.com/api/employees/${emp_id}/documents/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      alert("Employee updated successfully");
      navigate(`/viewEmployee/${id}`);

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <>
      <div className="edit-container">
        {/* Header */}
        <div className="edit-header">
          <h2>Edit Employee Information</h2>
        </div>
        <Section title="Personal Information" icon={<IoPersonOutline />}>
          {personalInfoFields.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.valueKey] || ""}
              disabled={field.disabled}
              onChange={handleChange}
            />
          ))}
        </Section>

        <Section title="Employment Details" icon={<FiBriefcase />}>
          {employmentFields.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.valueKey] || ""}
              onChange={handleChange}
            />
          ))}
        </Section>

        {/* Salary */}
        <Salary title="Salary & Compensation" icon={<LuWallet />}>
          {salaryFields.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.valueKey] || ""}
              onChange={handleChange}
            />
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
                <div className="div-icon">
                <p className="upload-icon"><LuUpload /></p>
                  <p className="doc-title">{doc}</p>
                
               </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="btn-primary" onClick={handleSubmit}>Save Changes</button>
          <button className="btn-secondary">Discard</button>
        </div>
      </div>
    </>
  );

};

function Section({ title, employee, children, icon }) {
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

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  options = [],
  required,
  disabled,
}) {
  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>

      {type === "select" ? (
        <select name={name} value={value || ""} onChange={onChange}>
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
          name={name}
          value={value || ""}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default EditEmployee;