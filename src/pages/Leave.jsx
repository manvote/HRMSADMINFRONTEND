import { useState } from 'react';
import person from '../assets/leave-person.png'
import calendar from '../assets/leave-calendar.png'
import downcalendar from '../assets/leave-down-calendar.png'
import cancel from '../assets/leave-policy-cancel.png'
import applyleave from '../assets/leave-apply-leave.png'

export default function Leave() {

    const [showLeavePolicy, setShowLeavePolicy] = useState(false)
    const [showApplyLeave, setShowApplyLeave] = useState(false)

    return (
        <div className="p-6 bg-[#F5F8FF] justify-center">
            <div className="flex flex-row justify-between">
                <div className="mb-6">
                    <span className="text-[29px] font-bold text-[#00214D]">Leave Management</span>
                    <p className="text-[15px] text-[#667C99] mt-1">
                        Manage employee leave request and balances
                    </p>
                </div>

                <div className="flex gap-4">
                    <button className="bg-[#F5F8FF] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded border-[1px] border-[#EDF0F7]"
                        onClick={() => setShowLeavePolicy(!showLeavePolicy)}>
                        {/* <img src={} alt="" className="w-4 h-4 mr-3" /> */}
                        <span className="text-[#00214D] text-[13px]">Leave Policy</span>
                    </button>
                    <button className="bg-[#005DD6] flex h-[40px] w-[152px] shadow-md items-center justify-center rounded"
                        onClick={() => setShowApplyLeave(!showApplyLeave)}>
                        {/* <img src={Process} alt="" className="w-4 h-4 mr-3" /> */}
                        <span className="text-[13px] text-white">Apply Leave</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                {[
                    { label: 'Casual Leave', value: '15' },
                    { label: 'Sick Leave', value: '5' },
                    { label: 'Earned Leave', value: '10' },
                    { label: 'Comp-Off', value: '2' }].map((item, index) => (
                        <div key={index} className="h-[120px] w-[266px] bg-[#FFFFFF] m-6 rounded-lg py-2 px-4 shadow-md border-[1px] border-[#DBE1F0]">
                            <p className="text-[#667C99] text-[12px] pt-2">{item.label}</p>
                            <span className="mb-0 text-[30px] text-[#00214D]">{item.value}</span>
                        </div>
                    ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6 m-6">
                <div className="bg-[#FFFFFF] rounded-lg p-6 shadow-md border-[1px] border-[#DBE1F0]">
                    <div className='flex items-center gap-2'>
                        <img src={person} alt="" className='w-7 h-7' />
                        <span className="text-[24px] text-[#00214D]">Who's Away Today</span>
                    </div>
                    <p className="text-[14px] text-[#667C99]">3 employees currently on leave</p>

                    {[
                        { name: 'Sendhur', type: 'casual leave', department: 'IT', onday: `Back ${"2024-06-11"}` },
                        { name: 'Kumar', type: 'casual leave', department: 'Finance', onday: `Back ${"2024-06-11"}` },
                        { name: 'Rajesh', type: 'casual leave', department: 'HR', onday: `Back ${"2024-06-11"}` }
                    ].map((item, index) => (
                        <div key={index} className='flex bg-[#F0F4FF] shadow-md mb-4 px-3 py-2 rounded-xl justify-between'>
                            <div className=''>
                                <div>
                                    <span className='text-[16px] text-[#00214D]'>{item.name}</span>
                                </div>
                                <div>
                                    <span className='text-[12px] text-[#667C99]'>{item.department}</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <span className='text-[12px] text-[#00214D]'>{item.type}</span>
                                </div>
                                <div>
                                    <span className='text-[12px] text-[#667C99]'>{item.onday}</span>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
                <div className="bg-[#FFFFFF] rounded-lg p-6 col-span-2 shadow-md border-[1px] border-[#DBE1F0]">
                    <div className='flex items-center gap-2'>
                        <img src={person} alt="" className='w-7 h-7' />
                        <span className="text-[24px] text-[#00214D]">Upcoming Public Holidays</span>
                    </div>
                    <p className="text-[14px] text-[#667C99]">Plan your long weekends</p>

                    {[
                        { holidayname: 'Christmas', holidaytype: 'Public holiday', date: "Dec 25", day: "Monday" },
                        { holidayname: 'New Year', holidaytype: 'Public holiday', date: "Dec 25", day: "Monday" },
                        { holidayname: 'Independence Day', holidaytype: 'National holiday', date: "Dec 25", day: "Monday" }
                    ].map((item, index) => (
                        <div key={index} className="bg-[#FFFFFF] shadow-md mb-4 p-3 rounded-xl border-[#DBE1F0] border-[1px]">
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img src={calendar} alt="" className='w-5 h-5  text-[#005DD6]' />
                                    <div>
                                        <div>
                                            <span className='text-[16px] text-[#00214D]'>{item.holidayname}</span>
                                        </div>
                                        <div>
                                            <span className='text-[14px] text-[#667C99]'>{item.holidaytype}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='text-[16px] text-[#00214D]'>{item.date}</span>
                                    </div>
                                    <div>
                                        <span className='text-[12px] text-[#667C99]'>{item.day}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>

            <div className='bg-[#FFFFFF] m-6 rounded-lg p-6 shadow-md border-[1px] border-[#DBE1F0]'>
                <div className='flex justify-between'>
                    <div>
                        <span className="text-[24px] text-[#00214D]">Leave Requests</span>
                        <p className='text-[13px] text-[#667C99]'>Review and approve pending leave applications</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <select className='w-full border-[1px] border-[#EDF0F7] rounded-lg p-2 bg-[#F5F8FF] focus:outline-none shadow-md'>
                                <option>All Status</option>
                                <option>Approved</option>
                                <option>Pending</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                        <div>
                            <select className='w-full border-[1px] border-[#EDF0F7] rounded-lg p-2 bg-[#F5F8FF] focus:outline-none shadow-md'>
                                <option>All Departments</option>
                                <option>IT</option>
                                <option>Finance</option>
                                <option>HR</option>
                            </select>
                        </div>
                        <div>
                            <select className='w-full border-[1px] border-[#EDF0F7] rounded-lg p-2 bg-[#F5F8FF] focus:outline-none shadow-md'>
                                <option>All Leave Types</option>
                                <option>Casual Leave</option>
                                <option>Sick Leave</option>
                            </select>
                        </div>
                    </div>
                </div>

                {[
                    { name: 'ram', department: 'IT', status: 'pending', leavetype: 'Sick Leave', duration: '2 days', from: '2025-06-11', to: '2025-12-30', reason: 'personal work' },
                    { name: 'krish', department: 'Finance', status: 'pending', leavetype: 'Casual Leave', duration: '3 days', from: '2025-06-11', to: '2025-12-30', reason: 'personal work' },
                    { name: 'ram', department: 'Marketing', status: 'Approved', leavetype: 'Sick Leave', duration: '2 days', from: '2025-06-11', to: '2025-12-30', reason: 'personal work' },
                    { name: 'ram', department: 'IT', status: 'pending', leavetype: 'Sick Leave', duration: '2 days', from: '2025-06-11', to: '2025-12-30', reason: 'personal work' },
                    { name: 'ram', department: 'IT', status: 'Approved', leavetype: 'Sick Leave', duration: '  2 days', from: '  2025 - 06 - 11', to: '  2025 - 12 - 30', reason: ' personal work' }
                ].map((item, index) => (
                    <div className='border-[1px] border-[#DBE1F0] p-3 rounded-lg grid grid-cols-7 my-2 shadow-md items-center' key={index}>
                        <div className='col-span-6'>
                            <div className='flex gap-10'>
                                <div>
                                    <span className='text-[16px] text-[#00214D]'>{item.name}</span>
                                </div>
                                <div>
                                    <span className='text-[#00214D] text-[12px] border-[1px] border-[#DBE1F0] rounded-lg p-1'>{item.department}</span>
                                </div>
                                <div>
                                    <span className={`text-[12px] ${item.status === 'pending' ? 'text-[#005DD6] bg-[#F0F4FF]' : 'text-[#FFFFFF] bg-[#005DD6]'} border-[1px] rounded-lg p-1`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-90 my-2'>
                                <div>
                                    <div>
                                        <span className='text-[14px] text-[#667C99]'>Type: {item.leavetype}</span>
                                    </div>
                                    <div>
                                        <span className='text-[14px] text-[#667C99]'>From: {item.from}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='text-[14px] text-[#667C99]'>Duration: {item.duration}</span>
                                    </div>
                                    <div>
                                        <span className='text-[14px] text-[#667C99]'>To: {item.to}</span>
                                    </div>
                                </div>
                            </div>
                            <span className='text-[14px] text-[#00214D]'>Reason: {item.reason}</span>
                        </div>
                        <div className=''>
                            <div className='bg-[#005DD6] flex items-center justify-center rounded h-[42px] mb-2'>
                                <button className='text-[#FFFFFF]'>Approve</button>
                            </div>
                            <div className='bg-[#F5F8FF] flex items-center justify-center rounded border-[#EDF0F7] border-[1px] h-[42px] mb-2'>
                                <button className='text-black'>Reject</button>
                            </div>
                        </div>

                    </div>
                ))
                }
            </div>

            <div className='bg-[#FFFFFF] m-6 rounded-lg p-6 shadow-md border-[1px] border-[#DBE1F0]'>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <img src={calendar} alt="" />
                            <span className="text-[24px] text-[#00214D]">Leave Calendar</span>
                        </div>
                        <p className='text-[13px] text-[#667C99]'>View team availability and leave distribution</p>
                    </div>
                    {/* <div>
                        <span className='text-[14px] text-[#00214D]'>My View</span>
                        <input type="radio" />
                        <span className='text-[14px] text-[#00214D]'>Team View</span>
                    </div> */}
                </div>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-[#EF4444] w-2 h-2'></div>
                        <span className='text-[14px] text-[#667C99]'>Sick Leave</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-[#3B82F6] w-2 h-2'></div>
                        <span className='text-[14px] text-[#667C99]'>Casual Leave</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-[#22C55E] w-2 h-2'></div>
                        <span className='text-[14px] text-[#667C99]'>Earned Leave</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-[#A855F7] w-2 h-2'></div>
                        <span className='text-[14px] text-[#667C99]'>Public Leave</span>
                    </div>
                </div>

                <div className='bg-[#F0F4FF] rounded-xl m-3 h-[700px] flex flex-col justify-center items-center'>
                    <div className=''>
                        <img src={downcalendar} alt="" className='w-10 h-10' />
                    </div>
                    <div className='text-center mt-2'>
                        <span className="text-[16px] text-[#667C99]">Team Calendar View</span>
                        <p className='text-[14px] text-[#667C99] pt-2'>Interactive calendar showing all team members leave schedule with color-coded leave types</p>
                    </div>
                </div>

            </div>

            {showLeavePolicy && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg relative w-1/2 shadow-lg">
                        <img src={cancel} alt="Cancel" className='absolute top-2 right-2 cursor-pointer m-2' onClick={() => setShowLeavePolicy(!showLeavePolicy)} />
                        <span className="text-[23px] font-bold text-[#00214D]">Company Leave Policy</span>
                        <p className="text-[13px] text-[#667C99]">Complete guideliness for leave management</p>

                        {[
                            { label: 'Casual Leave', details: 'Employees are entitled to 15 days of casual leave per year.' },
                            { label: 'Sick Leave', details: 'Employees can avail up to 5 days of sick leave annually with a medical certificate.' },
                            { label: 'Earned Leave', details: 'Earned leave accumulates at a rate of 1.5 days per month of service.' },
                            { label: 'Compensatory-Off', details: 'Compensatory off can be availed for extra hours worked on weekends or holidays.' }
                        ].map((item, index) => (
                            <div key={index} className='bg-[#F5F8FF] flex flex-col gap-2 my-2 justify-center p-2 rounded-lg'>
                                <span className="text-[16px] font-semibold text-[#00214D]">{item.label}</span>
                                <span className="text-[13px] text-[#667C99]">{item.details}</span>
                            </div>
                        ))
                        }
                    </div>
                </div>
            )}

            {showApplyLeave && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg relative w-1/2 shadow-lg">
                        <div className='absolute top-2 right-2 cursor-pointer m-2'>
                            <img src={cancel} alt="Cancel" onClick={() => setShowApplyLeave(!showApplyLeave)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={applyleave} alt="Apply Leave" className='w-5 h-5' />
                            <span className="text-[23px] font-bold text-[#00214D]">Apply for Leave</span>
                        </div>
                        <form className='mt-4'>
                            <div className='mb-4'>
                                <label className='block text-[14px] text-[#00214D] mb-2'>Leave Type</label>
                                <select className='w-full border-[1px] border-[#EDF0F7] rounded p-2 bg-[#F5F8FF]'>
                                    <option>Casual Leave</option>
                                    <option>Sick Leave</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-[14px] text-[#00214D] mb-2'>Start Date</label>
                                <input type="date" name="" id="" className='w-full border-[1px] focus:outline-none border-[#EDF0F7] rounded p-2 bg-[#F5F8FF]' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-[14px] text-[#00214D] mb-2'>End Date</label>
                                <input type="date" name="" id="" className='w-full border-[1px] focus:outline-none border-[#EDF0F7] rounded p-2 bg-[#F5F8FF]' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-[14px] text-[#00214D] mb-2'>Reason</label>
                                <textarea type="text" className='w-full border-[1px] focus:outline-none border-[#EDF0F7] rounded p-2 bg-[#F5F8FF]' placeholder='Enter Reason for Leave' />
                            </div>
                            <div className='flex justify-end gap-2'>
                                <button type="submit" className='bg-[#F5F8FF] text-white px-4 py-2 rounded border-[#EDF0F7] border-[1px]'>
                                    <span className='text-[#00214D] text-[13px]'>Cancel</span>
                                </button>
                                <button type="submit" className='bg-[#005DD6] text-white px-4 py-2 rounded'>
                                    <span className='text-[13px] text-[#FFFFFF]'>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}