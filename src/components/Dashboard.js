import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles
import './Dashboard.css'; // Import your custom CSS file

const Dashboard = () => {
  const students = useSelector((state) => state.students);
  const totalStudents = students.length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="mb-4">Dashboard</h2>
        
        <div className="progress-container">
          <CircularProgressbar 
            value={totalStudents} 
            text={`${totalStudents}`} 
            maxValue={100} // Set this to the maximum number of students you expect
          />
        </div>

        <p className="lead d-flex align-items-center">
          <i className="fas fa-user-graduate me-2 fs-4" style={{ color: '#007bff' }}></i>
          Total Students: 
          <span className="badge bg-primary ms-2 fs-5">{totalStudents}</span>
        </p>
        {/* Optionally render charts or other statistics here */}
      </div>
    </div>
  );
};

export default Dashboard;
