
import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import FinanceCchart from '@/components/FinanceCchart';
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        {/* Middle charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChart />
          </div>
        </div>
        {/*Bottom charts */}
        <div className='h-[500px] w-full'>
          <FinanceCchart />
        </div>
      </div>
      {/* Right side */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}

export default AdminPage

