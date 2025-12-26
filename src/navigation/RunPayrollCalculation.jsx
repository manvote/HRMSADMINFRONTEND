import TE from '../assets/payroll-process-TE.png'
import deduction from '../assets/payroll-process-deduction.png'
import gross from '../assets/payroll-process-gross.png'
import net from '../assets/payroll-process-net.png'
import Confirm from '../assets/payroll-process-confirm.png'
import warning from '../assets/payroll-run-process-warning.png'
import success from '../assets/payroll-run-process-success.png'

import { useNavigate } from 'react-router-dom';

export default function RunPayrollCalculation() {
    const navigate = useNavigate();
    return (
        <div className="px-6 py-3 bg-[#F5F8FF] justify-center">
            <span className="text-[#667C99] text-[13px]">Payroll {" > "}<span>Process Payroll {" > "}</span><span className="text-[#00214D] text-[13.5px]">Run Payroll Calculation</span></span>

            <div className="mt-2">
                <span className="text-[#0F1729] text-[30px] font-bold">Run Payroll Calculation</span>
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

            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 mt-6">
                <span className="text-[#0F1729] text-[18px] font-bold">Calculation Breakdown</span>
                <table className="w-full mt-4 table-auto">
                    <thead>
                        <tr className="grid grid-cols-8">
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Employee Name</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Employee ID</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Gross Salary</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Allowances</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Deductions</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Tax</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Net Pay</th>
                            <th className="text-left text-[#65758B] text-[14px] font-medium p-3">Calculation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'John Doe', empno: 'EMP001', grossSalary: '$5000', allowances: '$400', deductions: '$500', netSalary: '$4500', Tax: '$300', status: 'Calculated' },
                            { name: 'Jane Smith', empno: 'EMP002', grossSalary: '$5500', allowances: '$450', deductions: '$600', netSalary: '$4900', Tax: '$350', status: 'Error' },
                            { name: 'Mike Johnson', empno: 'EMP003', grossSalary: '$6000', allowances: '$500', deductions: '$700', netSalary: '$5300', Tax: '$400', status: 'Calculated' },
                            { name: 'Emily Davis', empno: 'EMP004', grossSalary: '$5200', allowances: '$420', deductions: '$550', netSalary: '$4650', Tax: '$320', status: 'Error' },
                            { name: 'David Wilson', empno: 'EMP005', grossSalary: '$5800', allowances: '$480', deductions: '$650', netSalary: '$5150', Tax: '$370', status: 'Calculated' },
                        ].map((column) => (
                            <div className='border-t-[1px] border-[#E1E7EF]'>
                            <tr key={column.empno} className="grid grid-cols-8">
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.name}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.empno}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.grossSalary}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.allowances}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.deductions}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-medium p-3">{column.Tax}</td>
                                <td className="text-left text-[#0F1729] text-[14px] font-bold p-3">{column.netSalary}</td>
                                <td className="m-2">
                                    {column.status === 'Calculated' ? (
                                        <td className="text-left text-[#15803D] bg-[#DCFCE7] text-[12px] font-medium p-2 rounded-lg">{column.status}</td>
                                    ) : (
                                        <td className="text-left text-[#EF4343] bg-[#EF434366] text-[12px] font-medium p-2 rounded-lg">{column.status}</td>
                                    )}
                                </td>
                            </tr>
                            </div>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='bg-[#FFFFFF] rounded-lg shadow-md mt-6 p-6'>
                <span className='text-[18px] text-[#0F1729] font-bold'>Validation Messages</span>
                <div className='bg-[#EF43431A] border-[#EF43431A] border-[1px] rounded-md mt-4 flex items-center gap-2 py-4 px-5'>
                    <img src={warning} alt="warning" />
                    <span className='text-[#00214D] text-[16px] font-medium'>Warning: Missing bank deatils for employee EMP003 (Micheal Johnson)</span>
                </div>
                <div className='bg-[#E1E7EF] border-[#005DD633] border-[1px] rounded-md mt-4 flex items-center gap-2 py-4 px-5'>
                    <img src={success} alt="success" />
                    <span className='text-[#00214D] text-[16px] font-medium'>Info: Payroll tax rates have been updated as of this month.</span>
                </div>
            </div>

            <div className='mt-6'>
                <button className="bg-[#005DD6] py-2.5 px-6 rounded mt-6 shadow-lg mb-6 flex items-center gap-2"
                onClick={() => navigate('/confirmPayrollProcess')}>
                    <img src={Confirm} alt="confirm" />
                    <span className="text-[14px] text-[#FFFFFF]">Proceed to Confirm Payroll</span>
                </button>
            </div>

        </div>
    )
}