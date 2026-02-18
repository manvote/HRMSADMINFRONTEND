import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Offboarding.css";
import {
  FiCalendar,
  FiAlertTriangle,
  FiCheckCircle,
} from "react-icons/fi";
import axios from "axios";

//employee data

const checklist = [
  "Laptop Returned",
  "Access Cards Returned",
  "Documents Submitted",
  "No Dues Clearance",
  "Knowledge Transfer Completed",
];
function Offboarding() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `https://hrmsbackend-z1jz.onrender.com/api/employees/${id}/`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        setEmployee({
          ...response.data,
          full_name: `${response.data.first_name || ""} ${response.data.last_name || ""}`.trim()
        });
        console.log("Employee Data:", response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployee();
  }, [id]);

  // const [formData, setFormData] = useState({});
  const [message, setMessage] = useState()
  const [offbortardData, setOffboardData] = useState({
    resignation_date: "",
    last_working_day: "",
    reason_for_exit: "",
    additional_comments: "",
  });

  const acces = localStorage.getItem("access");

  const handleChange = (e) => {
    setOffboardData({
      ...offbortardData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(offbortardData).forEach((key) => {
      data.append(key, offbortardData[key]);
    });

    try {
      const response = await axios.post(
        `https://hrmsbackend-z1jz.onrender.com/api/employees/${id}/offboarding/`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${acces}`,
          },e
        }
      );

      console.log("Employee Created:", response.data);
      setMessage("Employee added successfully!");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to add employee");
    }
  };

  const DeactivateEmployee = async () => {
    try {
      await axios.post(
        `https://hrmsbackend-z1jz.onrender.com/api/employees/${id}/deactivate/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${acces}`,
          },
        }
      );
      navigate("/employee");
    } catch (err) {
      console.error(err);
    }
  };

  if (!employee) {
    return <p style={{ padding: 20 }}>Employee not found</p>;
  }


  return (
    <div className="offboard-page">
      {/* Header */}
      <div className="offboard-header">
        <p className="e1 mb-0">Employee Offboarding</p>
        <p className="e2 mb-0">
          Process exit formalities for {employee.full_name} (ID: {id})
        </p>
      </div>

      <div className="offboard-layout">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* Employee Card */}
          <div className="card1 employee-card1">
            <img src={employee.avatar || "https://i.pravatar.cc/150"} alt="Employee Avatar" />
            <div>
              <p className="e3 mb-0">{employee.full_name}</p>
              <p className="e3-subtext mb-0">
                {employee.designation} • {employee.department}
              </p>
              <span className="e3-subtext">
                Joined: {employee.date_of_joining}
              </span>
            </div>
          </div>

          {/* Exit Details */}
          <div className="card1">
            <h3 className="final-text mb-0">Exit Details</h3>
            <p className="settle-text">Resignation and last working day information</p>

            <div className="grid-2 mb-3">
              <Input label="Resignation Date" type="date" value={offbortardData.resignation_date} handleChange={handleChange} />
              <Input label="Last Working Day" type="date" value={offbortardData.last_working_day} handleChange={handleChange} />
            </div>

            <Input label="Reason for Exit"
              type="select"
              name="reason_for_exit"
              value={offbortardData.reason_for_exit}
              onChange={handleChange} />

            <textarea
              placeholder="Any additional comments or notes about the exit..."
              className="textarea1"
            />
          </div>

          {/* Checklist */}
          <div className="card1">
            <h3 className="final-text mb-0">Exit Checklist</h3>
            <p className="settle-text">0 of {checklist.length} items completed</p>

            {checklist.map((item, i) => (
              <div className="check-item" key={i}>
                <FiCheckCircle />
                <span>{item}</span>
                <span className="pending">Pending</span>
              </div>
            ))}
          </div>

          <div className="activate-button">
            <button className="danger" onClick={DeactivateEmployee}>Deactivate Employee</button>
            <button
              className="activate-cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="right-column">
          <div className="important-notice">
            <div className="warning">
              <p className="warning-icon mb-0"><FiAlertTriangle /></p>
              <p className="title-important mb-0">Important Notice</p>
            </div>

            <p className="imp-para">
              Ensure all checklist items are completed before deactivating
              the employee account.
            </p>
          </div>

          <div className="card1">
            <h3 className="final-text">Final Settlement</h3>
            <SettlementRow label="Pending Salary" value="₹75,000" />
            <SettlementRow label="Leave Encashment" value="₹25,000" />
            <SettlementRow label="Gratuity" value="₹50,000" />
            <SettlementRow label="Deductions" value="-₹5,000" negative />

            <hr />
            <SettlementRow label="Total Settlement" value="₹1,45,000" total />
          </div>

          <div className="card1">
            <h4 className="check-text">Checklist Progress</h4>
            <div className="progress-bar">
              <div style={{ width: "50%" }} />
            </div>
            <p className="percent">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Input({ label, type="text", name, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      {type === "select" ? (
        <select name={name} value={value} onChange={onChange}>
          <option value="">Select reason</option>
          <option value="Resignation">Resignation</option>
          <option value="Termination">Termination</option>
          <option value="Retirement">Retirement</option>
          <option value="Absconding">Absconding</option>
        </select>
      ) : (
        <input
          type={type}
          name={name}
          defaultValue={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

function SettlementRow({ label, value, negative, total }) {
  return (
    <div className={`settle-row ${total ? "total" : ""}`}>
      <span className={`settle-text ${total ? "total-text" : ""}`}>{label}</span>
      <span className={`settle-value ${negative ? "negative" : ""}`}>{value}</span>
    </div>
  );
}

export default Offboarding;
