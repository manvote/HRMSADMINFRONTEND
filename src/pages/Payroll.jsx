import { useNavigate } from "react-router-dom"
import React from "react"

import Export from "../assets/payroll-download.png"
import Process from "../assets/payroll-process.png"
import box1 from '../assets/payroll-box-1.png'
import box2 from '../assets/payroll-box-2.png'
import box3 from '../assets/payroll-box-3.png'
import box4 from '../assets/payroll-box-4.png'
import generate from '../assets/payroll-generate-slip.png'

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function Payroll() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Salary (₹)",
        data: [850000, 860000, 880000, 895000, 915000, 940000],
        borderColor: "#1e88e5",
        backgroundColor: "rgba(30, 136, 229, 0.2)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#1e88e5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value}`,
        },
      },
    },
  }

  const navigate = useNavigate(); 

  return (
    <div className="grid grid-cols-[256px 1fr] min-h-screen w-full">
      {/* <Navbar /> */}

      <div className="p-6 bg-[#F5F8FF] justify-center">
        <div className="flex flex-row justify-between">
          <div className="mb-6">
            <span className="text-[29px] font-bold text-[#00214D]">Payroll Management</span>
            <p className="text-[15px] text-[#667C99] mt-1">
              Manage salary processing and payout cycles
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#F5F8FF] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded border-[1px] border-[#EDF0F7]">
              <img src={Export} alt="" className="w-4 h-4 mr-3" />
              <span className="text-[#00214D] text-[13px]">Export Payroll</span>
            </button>
            <button className="bg-[#005DD6] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded"
            onClick={ () => navigate('/processpayroll')}>
              <img src={Process} alt="" className="w-4 h-4 mr-3" />
              <span className="text-[13px] text-white">Process Payroll</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md border-[1px] border-[#DBE1F0]">
            <p className="text-[#667C99] text-[12px] pt-2">Current Month</p>
            <div className="flex items-center">
              <img src={box1} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[21px] text-[#00214D]">$92.0L</h5>
                <p className="mt-0 text-[11px] text-[#667C99]">cgcurc</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Status</p>
            <div className="flex items-center">
              <img src={box2} alt="" className="bg-[#00214D] rounded-4xl w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px] text-[#00214D]">Processed</h5>
                <p className="mt-0 text-[13px] text-[#667C99]">on</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Avg CTC</p>
            <div className="flex items-center">
              <img src={box3} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px] text-[#00214D]">$6.8L</h5>
                <p className="mt-0 text-[13px] text-[#667C99]">Per Employee</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Total Deductions</p>
            <div className="flex items-center">
              <img src={box4} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px] text-[#00214D]">$16.9L</h5>
                <p className="mt-0 text-[13px] text-[#667C99]">This Month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] w-full shadow-md rounded-lg p-6 border-[#DBE1F0] border-[1px]">
          <span className="text-[23px] text-[#00214D] font-bold">Payroll Cycle process</span>
          <p className="text-[13px] text-[#667C99]">Monthly salary processing status</p>

          {[
            { label: "Attendance Processed", percent: "50%" },
            { label: "Leave Adjusted", percent: "70%" },
            { label: "Tax Calculations", percent: "40%" },
            { label: "Salary Disburement", percent: "60%" }
          ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span className="text-[13px] text-[#00214D]">{item.label}</span>
                  <span className="text-[14px] text-[#16A249]">{item.percent}</span>
                </div>
                <div className="bg-[#16A249] h-[8px] rounded-full" style={{ width: item.percent }}>
                </div>
              </div>
          ))
          }
        </div>


        <div className="bg-[#FFFFFF] border-[#DBE1F0] border-[1px] w-full shadow-md rounded-lg p-6 mt-6">
          <span className="text-[23px] text-[#00214D] font-bold">Monthly CTC Report</span>
          <p className="text-[13px] text-[#667C99]">Total salary processed over time</p>
          <div className="pt-2">
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="flex gap-6 w-full mt-6">

          <div className="bg-[#FFFFFF] border-[1px] border-[#DBE1F0] p-6 rounded-lg w-1/2 shadow-md">
            <span className="text-[#00214D] text-[23px] font-bold">Salary Structure</span>
            <p className="text-[#667C99] text-[13px]">Breakdown of salary components</p>

            {[
              { label: "Basic Salary", amount: "₹30,000" },
              { label: "HRA", amount: "₹15,000" },
              { label: "Special Allowance", amount: "₹5,000" },
              { label: "Performance Bonus", amount: "₹2,000" },
              { label: "Other Allowances", amount: "₹3,500" }
            ].map((item, index) => (
              <div key={index} className="py-2">
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#00214D]">{item.label}</span>
                  <span className="text-[13px] text-[#00214D]">{item.amount}</span>
                </div>
                <div className="w-full bg-[#F0F4FF] h-[8px] rounded-full mt-2" style={{width: item.amount.indexOf(index, 0)}}/>
              </div>
            ))
            }

            <div className="border-t-[1px] border-t-[#DBE1F0] mt-3 pt-2">
              <div className="flex justify-between">
                <span className="text-[#00214D] text-[15px] font-bold">Total CTC</span>
                <span className="text-[#00214D] text-[13px] font-bold">90000</span>
              </div>
            </div>

          </div>

          <div className="bg-[#FFFFFF] border-[1px] border-[#DBE1F0] p-6 rounded-lg w-1/2 shadow-md">
            <span className="text-[#00214D] text-[23px] font-bold">Compliance & Deductions</span>
            <p className="text-[#667C99] text-[13px]">Statutory and other deductions</p>

            {[
              { label: "EPF", amount: "₹5,400" },
              { label: "Professional Tax", amount: "₹2,400" },
              { label: "Income Tax (TDS)", amount: "₹8,500" },
              { label: "ESI", amount: "₹675" }
            ].map((item, index) => (
              <div key={index} className="bg-[#F0F4FF] h-[48px] mt-4 p-3 rounded-lg flex items-center justify-between">
                <span className="text-[16px] text-[#00214D]">{item.label}</span>
                <div className="border-[#DBE1F0] border-[1px] rounded-lg px-2 items-center flex">
                  <span className="text-[10px] text-[#00214D]">{item.amount}</span>
                </div>
              </div>
            ))
            }

            <div className="border-y-[1px] border-y-[#DBE1F0] mt-3 pt-3 pb-2">
              <div className="flex justify-between">
                <span className="text-[15px] font-bold text-[#00214D]">Total Deductions</span>
                <span className="text-[14px] font-bold text-[#EF4343]">16000</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between py-2">
                <span className="text-[15px] font-bold text-[#00214D]">Net Salary</span>
                <span className="text-[14px] font-bold text-[#16A249]">16000</span>
              </div>
            </div>
            <button className="bg-[#005DD6] w-full py-2 rounded text-white mt-4 shadow-lg flex justify-center items-center gap-3">
              <img src={generate} alt="Generate Payslip" />
              <span className="text-[13px] text-[#FFFFFF]">Generate Payslip</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
