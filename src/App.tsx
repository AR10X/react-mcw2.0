import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LoginSignupPage from './pages/login-signup/LoginSignupPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import SubjectPage from './pages/subject/SubjectPage';
import UploadPage from './pages/upload/UploadPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LoginSignupPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/subject/:id" element={<SubjectPage />} />
        <Route exact path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
