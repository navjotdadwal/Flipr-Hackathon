import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/noPage';
import TopPage from './pages/TopPage/topPage';
import AdminDashboard from './pages/AdminDashboard/adminDashboard';
import AddEmployee from './pages/AddEmployee/addEmployee';
import EmployeeDashboard from "./pages/EmployeeDashboard/employeeDashboard"; 
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TopPage />} />
        <Route exact path="/admindash" element={<AdminDashboard />} />
        <Route exact path="/employeedash" element={<EmployeeDashboard />} />
        <Route exact path="/addemployee" element={<AddEmployee />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;