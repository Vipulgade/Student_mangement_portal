// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentList from './Pages/StudentList';
import RegisterStudent from './Pages/StudentRegistration';
import { StudentProvider } from './context/StudentContext';
import StudentDetails from './components/StudentDetails';
import StudentEdit from './components/StudentEdit';

function App() {
  return (
    <StudentProvider>
    <Router>
      <NavBar /> {/* Include NavBar at the top */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/register" element={<RegisterStudent />} />
        <Route path="/studentdetails/:id" element={<StudentDetails />} />
        <Route path="/profile" element={<StudentDetails />} />
        <Route path="/students/edit/:id" element={<StudentEdit/>} />

      </Routes>
    </Router>
    </StudentProvider>
  );
}

export default App;

       