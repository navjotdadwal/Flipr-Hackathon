import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/noPage';
import TopPage from './pages/TopPage/topPage';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TopPage />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;