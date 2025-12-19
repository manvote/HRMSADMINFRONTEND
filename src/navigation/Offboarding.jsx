import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Offboarding.css";
import {
    FiCalendar,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

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

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return <p style={{ padding: 20 }}>Employee not found</p>;
    }


    return (
    <div className="offboard-page">
      {/* Header */}
      <div className="offboard-header">
        <p className="e1 mb-0">Employee Offboarding</p>
        <p className="e2 mb-0">
          Process exit formalities for {employee.name}
        </p>
      </div>

      <div className="offboard-layout">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* Employee Card */}
          <div className="card1 employee-card1">
            <img src={employee.avatar} alt={employee.name} />
            <div>
              <p className="e3 mb-0">{employee.name}</p>
              <p className="e3-subtext mb-0">
                {employee.role} • {employee.dept}
              </p>
              <span className="e3-subtext">
                Joined: {employee.joined}
              </span>
            </div>
          </div>

          {/* Exit Details */}
          <div className="card1">
            <h3 className="final-text mb-0">Exit Details</h3>
            <p className="settle-text">Resignation and last working day information</p>

            <div className="grid-2 mb-3">
              <Input label="Resignation Date" type="date" />
              <Input label="Last Working Day" type="date" />
            </div>

            <Input label="Reason for Exit" type="select" />

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
            <button className="danger">Deactivate Employee</button>
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


function Input({ label, type }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === "select" ? (
        <select>
          <option>Select reason</option>
        </select>
      ) : (
        <input type={type} />
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
