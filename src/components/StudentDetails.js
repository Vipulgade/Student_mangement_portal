import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentDetails.css'; // Optional: Custom CSS file for additional styles

const StudentDetails = () => {
  const { id } = useParams();
  const student = useSelector(state => state.students.find(s => s.id === parseInt(id)));

  // Error handling if the student is not found
  if (!student) {
    return (
      <div className="container my-5">
        <Navbar />
        <div className="alert alert-danger" role="alert">
          Student not found!
        </div>
        <Link to="/students" className="btn btn-primary">Go back to Student List</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
     
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">{student.name}</h2>
          <div className="details-list">
            <div className="detail-item mb-3">
              <i className="fas fa-envelope fa-2x me-3"></i>
              <span><strong>Email:</strong> {student.email}</span>
            </div>
            <div className="detail-item mb-3">
              <i className="fas fa-birthday-cake fa-2x me-3"></i>
              <span><strong>Age:</strong> {student.age}</span>
            </div>
            <div className="detail-item mb-3">
              <i className="fas fa-school fa-2x me-3"></i>
              <span><strong>Class:</strong> {student.className}</span>
            </div>
            <div className="detail-item mb-3">
              <i className="fas fa-home fa-2x me-3"></i>
              <span><strong>Address:</strong> {student.address}</span>
            </div>
            <div className="detail-item mb-3">
              <i className="fas fa-phone fa-2x me-3"></i>
              <span><strong>Phone:</strong> {student.phoneNumber}</span>
            </div>
          </div>
          {/* Back Button */}
          <Link to="/students" className="btn btn-primary mt-4">Go back to Student List</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
