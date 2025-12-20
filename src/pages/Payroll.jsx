import Navbar from "../components/navbar";
import Export from "../assets/payroll-download.png"
import Process from "../assets/payroll-process.png"
import box1 from '../assets/payroll-box-1.png'
import box2 from '../assets/payroll-box-2.png'
import box3 from '../assets/payroll-box-3.png'
import box4 from '../assets/payroll-box-4.png'

export default function Payroll() {
  return (
    <div className="grid grid-cols-[256px 1fr] min-h-screen w-full">
      {/* <Navbar /> */}

      <div className="p-6 bg-[#EDF0F7] justify-center">
        <div className="flex flex-row justify-between">
          <div className="mb-6">
            <h1 className="text-[29px] font-bold text-[#00214D]">Payroll Management</h1>
            <p className="text-[15px] text-[#667C99] mt-1">
              Manage salary processing and payout cycles
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#F5F8FF] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded-xl">
              <img src={Export} alt="" className="w-4 h-4 mr-3" />
              <span className="text-[#00214D] text-[13px]">Export Payroll</span>
            </button>
            <button className="bg-[#005DD6] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded-xl">
              <img src={Process} alt="" className="w-4 h-4 mr-3" />
              <span className="text-[13px] text-white">Process Payroll</span>
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Current Month</p>
            <div className="flex items-center">
              <img src={box1} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px]">$92.0L</h5>
                <p className="mt-0 text-[13px]">cgcurc</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Status</p>
            <div className="flex items-center">
              <img src={box2} alt="" className="bg-[#00214D] rounded-4xl w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px]">Processed</h5>
                <p className="mt-0 text-[13px]">on</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Avg CTC</p>
            <div className="flex items-center">
              <img src={box3} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px]">$6.8L</h5>
                <p className="mt-0 text-[13px]">Per Employee</p>
              </div>
            </div>
          </div>
          <div className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md">
            <p className="text-[#667C99] text-[12px] pt-2">Total Deductions</p>
            <div className="flex items-center">
              <img src={box4} alt="" className="w-[35px] h-[35px] mt-2" />
              <div className="pl-5 h-[35px]">
                <h5 className="mb-0 text-[22px]">$16.9L</h5>
                <p className="mt-0 text-[13px]">This Month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#FFFFFF] w-[1136px] h-[316px] shadow-md rounded-lg p-6">
            <h1>Payroll Cycle process</h1>
            <p>Monthly salary processing status</p>
          </div>
        </div>
      
      
      <div className="flex gap-3 mt-6">
      {/* LEFT – Salary Structure */}
      <div className="rounded-xl shadow-sm border p-6 w-[50%] bg-white h-[518px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          Salary Structure
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Breakdown of salary components
        </p>

        {[
          { label: "Basic Salary", amount: "₹45,000", percent: "50%" },
          { label: "HRA", amount: "₹18,000", percent: "20%" },
          { label: "Special Allowance", amount: "₹13,500", percent: "15%" },
          { label: "Performance Bonus", amount: "₹9,000", percent: "10%" },
          { label: "Other Allowances", amount: "₹4,500", percent: "5%" },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
              <span>{item.label}</span>
              <span>{item.amount} ({item.percent})</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full w-[60%]" />
            </div>
          </div>
        ))}

        <div className="border-t pt-4 flex justify-between font-semibold text-gray-800">
          <span>Total CTC</span>
          <span>₹90,000</span>
        </div>
      </div>

      {/* RIGHT – Compliance & Deductions */}
      <div className="bg-white rounded-xl shadow-sm border p-6 w-[50%] h-[518px]">
        <h3 className="text-[23px] font-semibold text-gray-800 mb-1">
          Compliance & Deductions
        </h3>
        <p className="text-[12px] text-gray-500 mb-6">
          Statutory and other deductions
        </p>

        {[
          { label: "EPF", amount: "₹5,400" },
          { label: "Professional Tax", amount: "₹2,400" },
          { label: "Income Tax (TDS)", amount: "₹8,500" },
          { label: "ESI", amount: "₹675" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#F0F4FF] rounded-lg px-4 py-3 mb-4 text-sm font-medium h-[48px]"
          >
            <span className="text-gray-700 text-[15px]">{item.label}</span>
            <span className="text-gray-900 text-[10px]">{item.amount}</span>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between font-semibold">
            <span className="text-[#00214D]">Total Deductions</span>
            <span className="text-[#EF4343]">₹16,975</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-[#00214D]">Net Salary</span>
            <span className="text-[#16A249]">₹73,025</span>
          </div>
        </div>

        <button className="w-full bg-[#005DD6] hover:bg-[#004BB5] text-white py-3 rounded-2xl font-medium">
          Generate Payslip
        </button>
      </div>
      </div>
    </div>
    </div>
  );
}
