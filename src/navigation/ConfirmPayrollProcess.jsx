import TE from '../assets/payroll-process-TE.png'
import deduction from '../assets/payroll-process-deduction.png'
import gross from '../assets/payroll-process-gross.png'
import net from '../assets/payroll-process-net.png'
import Confirm from '../assets/payroll-process-confirm.png'
import warning from '../assets/payroll-run-process-warning.png'

export default function ConfirmPayrollProcess() {
    return (
        <div className="px-6 py-3 bg-[#F5F8FF] justify-center">
            <span className="text-[#667C99] text-[13px]">Payroll {" > "}<span>Process Payroll {" > "}</span><span className="text-[#00214D] text-[13.5px]">Confirm & Process Payroll</span></span>

            <div className="mt-2">
                <span className="text-[#0F1729] text-[30px] font-bold">Confirm & Process Payroll</span>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {[
                    { label: 'Payroll Month & Year', value: 'December 2023', icon: TE },
                    { label: 'Total Employees Included', value: '156', icon: TE },
                    { label: 'Total Net Pay Amount', value: '$120,9384', icon: gross },
                    { label: 'Processing Date', value: 'Dec 24, 2023', icon: net },
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

            <div className='bg-[#FFFFFF] rounded-lg shadow-md mt-6 p-4'>
                <span className='text-[18px] text-[#0F1729] font-bold'>Confirmation Checklist</span>
                {[
                    { label: 'Attendance verified', status: 'Verified' },
                    { label: 'Leave adjustments finalized', status: 'Verified' },
                    { label: 'Tax and compliance verified', status: 'Verified' },
                    { label: 'Bank details validated', status: 'Verified' },
                ].map((item, index) => (
                    <div key={index} className='bg-[#F0F4FF80] flex justify-between items-center p-2 mt-3 rounded-md'>
                        <div>
                            <img src="" alt="" />
                            <span className='text-[#0F1729] text-[14px] font-medium'>{item.label}</span>
                        </div>
                        <div className='bg-[#DCFCE7] p-1 px-2 rounded-md'>
                            <span className='text-[#15803D] text-[12px]'>{item.status}</span>
                        </div>
                    </div>
                ))
                }
            </div>

            <div className='bg-[#FFFFFF] rounded-lg shadow-md mt-6 p-4'>
                <span className='text-[18px] text-[#0F1729] font-bold'>Approval Confirmation</span>
                <div className='bg-[#EF43431A] border-[#EF43431A] border-[1px] rounded-md mt-4 flex items-center gap-2 py-4 px-5'>
                    <img src={warning} alt="warning" />
                    <span className='text-[#00214D] text-[16px] font-medium'>Once payroll is processed, changes cannot be reversed.</span>
                </div>
                <div className='mt-4 flex items-center gap-2 py-2 px-5'>
                    <input type="radio" className='w-5 h-5 accent-[#005DD6]' />
                    <span className='text-[#00214D] text-[16px] font-medium'>I confirm all payroll data is accurate and approved.</span>
                </div>
            </div>

            <div className='mt-6 mb-3'>
                <button className="bg-[#005DD6] py-2.5 px-6 rounded mt-6 shadow-lg mb-6 flex items-center gap-2"
                    onClick={() => navigate('/confirmPayrollProcess')}>
                    <img src={Confirm} alt="confirm" />
                    <span className="text-[14px] text-[#FFFFFF]">Proceed to Confirm Payroll</span>
                </button>
            </div>
        </div>
    )
}