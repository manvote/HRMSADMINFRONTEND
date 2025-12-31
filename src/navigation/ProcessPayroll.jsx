import TE from '../assets/payroll-process-TE.png'
import deduction from '../assets/payroll-process-deduction.png'
import gross from '../assets/payroll-process-gross.png'
import net from '../assets/payroll-process-net.png'
import Run from '../assets/payroll-process-run.png'
import Confirm from '../assets/payroll-process-confirm.png'
import tick from '../assets/payroll-process-tick.png'
import tickround from '../assets/payroll-process-tickround.png'
import angle from '../assets/payroll-process-angle.png'
import angleround from '../assets/payroll-process-angleround.png'

import { useNavigate } from 'react-router-dom';

export default function ProcessPayroll() {
    const navigate = useNavigate();

    return (
        <div className="px-6 py-3 bg-[#F5F8FF] justify-center">
            <span className="text-[#667C99] text-[13px]">Payroll {" > "}<span className="text-[#00214D] text-[13.5px]">Process Payroll</span></span>
            <div className="mt-2">
                <span className="text-[#0F1729] text-[30px] font-bold">Process Payroll</span>
                <p className="text-[#65758B] text-[16px]">Review, validate and finalize monthly payroll processing</p>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 mt-6">
                <span className="text-[#0F1729] text-[18px] font-bold">Payroll Period Selection</span>
                <div className="mt-2 flex justify-between gap-3">
                    <div>
                        <p className="text-[#65758B] text-[14px] my-2">Payroll Month</p>
                        <select className="border-[1px] border-[#E1E7EF] bg-[#F9FAFB] rounded-md p-2 w-[350px] focus:outline-none">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                    <div>
                        <p className="text-[#65758B] text-[14px] my-2">Payroll Year</p>
                        <select className="border-[1px] border-[#E1E7EF] bg-[#F9FAFB] rounded-md p-2 w-[350px] focus:outline-none">
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                        </select>
                    </div>
                    <div>
                        <p className="text-[#65758B] text-[14px] my-2">Payroll Cycle</p>
                        <select className="border-[1px] border-[#E1E7EF] bg-[#F9FAFB] rounded-md p-2 w-[350px] focus:outline-none">
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 mt-6">
                <span className="text-[#0F1729] text-[18px] font-bold mt-6">Pre-Processing Checklist</span>
                <div className='mt-3'>
                {[
                    { label: 'Attendance Data Verified', icon: '', status: 'Verified' },
                    { label: 'Leave Adjustments Applied', icon: '', status: 'Pending' },
                    { label: 'Salary Components Locked', icon: '', status: 'Verified' },
                    { label: 'Tax Calculations Completed', icon: '', status: 'Pending' },
                    { label: 'Compliance Deductions Applied', icon: '', status: 'Verified' },
                ].map((item, index) => (
                    <div key={index}>
                        <div className='flex justify-between items-center px-4 py-2 mb-2 rounded-lg bg-[#F0F4FF80]'>
                            <div>
                                <img src="" alt="" />
                                <span className='text-[14px] text-[#0F1729]'>{item.label}</span>
                            </div>
                            <div>
                                {item.status === 'Verified' ? (
                                    <td className="text-left text-[#15803D] bg-[#DCFCE7] text-[12px] font-medium p-2 rounded-lg">{item.status}</td>
                                ) : (
                                    <td className="text-left text-[#C2410C] bg-[#FFEDD5] text-[12px] font-medium p-2 rounded-lg">{item.status}</td> 
                                )}
                            </div>
                        </div>
                    </div>
                ))
                }
                </div>

                <div></div>
            </div>

            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 mt-6">
                <span className="text-[#0F1729] text-[18px] font-bold">Employee Payroll Summary</span>
                <table className="w-full mt-4 table-auto">
                    <thead>
                        <tr className="grid grid-cols-7">
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Employee Name</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Employee ID</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Department</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Gross Salary</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Total Deductions</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Net Pay</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'John Doe', empno: 'EMP001', dept: 'Finance', grossSalary: '$5000', deductions: '$500', netSalary: '$4500', status: 'Ready' },
                            { name: 'Jane Smith', empno: 'EMP002', dept: 'HR', grossSalary: '$5500', deductions: '$600', netSalary: '$4900', status: 'Ready' },
                            { name: 'Mike Johnson', empno: 'EMP003', dept: 'IT', grossSalary: '$6000', deductions: '$700', netSalary: '$5300', status: 'on Hold' },
                            { name: 'Emily Davis', empno: 'EMP004', dept: 'Marketing', grossSalary: '$5200', deductions: '$550', netSalary: '$4650', status: 'on Hold' },
                            { name: 'David Wilson', empno: 'EMP005', dept: 'Sales', grossSalary: '$5800', deductions: '$650', netSalary: '$5150', status: 'Ready' },
                        ].map((column) => (
                            <div className='border-t-[1px] border-[#E1E7EF]'>
                            <tr key={column.empno} className="grid grid-cols-7">
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.name}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.empno}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.dept}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.grossSalary}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.deductions}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-bold p-3">{column.netSalary}</td>
                                <td className="m-2">
                                    {column.status === 'Ready' ? (
                                        <td className="text-left text-[#15803D] bg-[#DCFCE7] text-[12px] font-medium p-2 rounded-lg">{column.status}</td>
                                    ) : (
                                        <td className="text-left text-[#A16207] bg-[#FEF9C3] text-[12px] font-medium p-2 rounded-lg">{column.status}</td>
                                    )}
                                </td>
                            </tr>
                            </div>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {[
                    { label: 'Total Employees Included', value: '156', icon: TE },
                    { label: 'Total Gross Payroll', value: '$1,209,384', icon: gross },
                    { label: 'Total Deductions', value: '$120,9384', icon: deduction },
                    { label: 'Net Payroll Amount', value: '$12,09384', icon: net },
                ].map((stat, index) => (
                    <div key={index} className="bg-[#FFFFFF] rounded-lg shadow-md mt-6 px-4">
                        <div className='flex items-center gap-4 p-3'>
                            <div className='bg-[#F1F5F9] p-2 rounded-xl'>
                                <img src={stat.icon} alt="icon" />
                            </div>
                            <div>
                                <p className="text-[12px] text-[#65758B] mb-0">{stat.label}</p>
                                <span className="text-[20px] text-[#0F1729] font-bold">{stat.value}</span>
                            </div>
                        </div>
                    </div>
                ))
                }

            </div>

            <div className='mt-6 gap-4 flex mb-5'>
                <button className="bg-[#005DD6] py-2.5 px-6 rounded mt-6 shadow-lg mb-6 flex items-center gap-2"
                onClick={() => navigate('/runPayrollCalculation')}>
                    <img src={Run} alt="run" />
                    <span className="text-[14px] text-[#FFFFFF]">Run Payroll Calculation</span>
                </button>
                <button className="bg-[#16A34A] py-2.5 px-6 rounded mt-6 shadow-lg mb-6 flex items-center gap-2">
                    <img src={Confirm} alt="confirm" />
                    <span className="text-[14px] text-[#FFFFFF] ml-0">Confirm & Payroll Process</span>
                </button>
            </div>
        </div>
    )
}