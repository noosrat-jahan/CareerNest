import Navbar from "@/components/Navbar";
import useAdmin from "@/hooks/useAdmin";
import AdminDashboard from "@/pages/AdminDashboard";
import UserDashboard from "@/pages/UserDashboard";
import React from "react";

const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);

  if (isAdminLoading) {
    return "Loading";
  }
  return (
    <div>
      <Navbar></Navbar>

      {isAdmin ? (
        <AdminDashboard></AdminDashboard>
      ) : (
        <UserDashboard></UserDashboard>
      )}
    </div>
  );
};

export default DashboardLayout;
