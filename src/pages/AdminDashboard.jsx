import React from "react";

import { useAuth } from "../context/AuthContext";
import NavDashboard from "../components/NavDashboard";
import AsideDashboard from "../components/AsideDashBoard";
import { Route, Routes } from "react-router-dom";
import AdminInstitutionView from "./InstitutionsViewDashboard";
import DiplomasViewDashboard from "./DiplomasViewDashboard";
import StudentsViewDashboard from "./StudentsViewDashBoard";
import InstitutionsViewDashboard from "./InstitutionsViewDashboard";

const AdminDashboard = () => {
  const { authUser, setAuthUser, isloggedIn, setIsLoggedIn } = useAuth();

  console.log(isloggedIn)
  return (
    <>
      <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <NavDashboard />

        {/* <!-- Sidebar --> */}
        <AsideDashboard />
        <main class="p-4 md:ml-64 h-auto pt-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Routes>
              <Route
                path="/institutions"
                element={<InstitutionsViewDashboard />}
              />
              <Route path="/diplomas" element={<DiplomasViewDashboard />} />
              <Route path="/students" element={<StudentsViewDashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
