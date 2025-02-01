import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashBoard from "./DashBoard/AdminDashboard";

function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <AdminDashBoard>
        <div className="flex-grow">
          <Outlet />
        </div>
      </AdminDashBoard>
    </div>
  );
}

export default AdminLayout;
