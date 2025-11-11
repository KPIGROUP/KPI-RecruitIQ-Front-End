import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsBoard from './pages/JobsBoard';
import ApplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobsBoard />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
