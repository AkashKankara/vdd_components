"use client";

import dynamic from 'next/dynamic';

const VendorSummary = dynamic(() => import('@/app/ChartComponents/VendorSummary'), { ssr: false });
const VendorType = dynamic(() => import('@/app/ChartComponents/VendorType'), { ssr: false });
const VendorSchedule = dynamic(() => import("@/app/ChartComponents/VendorSchedule"), { ssr: false });
const DepartmentRequest = dynamic(() => import('@/app/ChartComponents/DepartmentRequest'), { ssr: false });
const DDStatus = dynamic(() => import('@/app/ChartComponents/DDStatus'), { ssr: false});
const Alerts = dynamic(() => import('@/app/ChartComponents/Alerts'), { ssr: false});
const ThirdParty = dynamic(() => import('@/app/ChartComponents/ThirdParty'), { ssr: false });

export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen flex flex-col pl-14 pt-14">
      <h1 className="text-xl font-bold mb-4">Supplier 360 TPRM Dashboard</h1>

      {/* First Row */}
      <div className="flex flex-row gap-x-4 overflow-x-auto p-1">
        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Vendor Summary</h2>
          <div className="flex-grow">
            <VendorSummary />
          </div>
        </div>

        <div className="min-w-[200px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Vendor Type</h2>
          <div className="flex-grow">
            <VendorType />
          </div>
        </div>

        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Vendor Schedule</h2>
          <div className="flex-grow">
            <VendorSchedule />
          </div>
        </div>

        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Department Request</h2>
          <div className="flex-grow">
            <DepartmentRequest />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-x-4 overflow-x-auto p-1">
        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Alerts(22)</h2>
          <div className="flex-grow">
            <Alerts />
          </div>
        </div>

        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Due Diligence Status</h2>
          <div className="flex-grow">
            <DDStatus/>
          </div>
        </div>

        <div className="min-w-[300px] h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Third Party</h2>
          <div className="flex-grow">
            <ThirdParty />
          </div>
        </div>

      </div>
    </div>
  );
}
