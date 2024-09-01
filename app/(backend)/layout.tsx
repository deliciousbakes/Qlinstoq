/** @format */
"use client";

import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Dashboard;
