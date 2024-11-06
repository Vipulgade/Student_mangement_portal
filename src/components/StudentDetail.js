import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDetails = () => {
  const { id } = useParams();
  const student = useSelector(state => state.students.find(s => s.id === parseInt(id)));

  if (!student) return <p>Student not found</p>;

  return (
    <div className="container my-5">
    
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <Link to={`/students/edit/${student.id}`} className="btn btn-secondary">Edit Student</Link>
    </div>
  );
};

export default StudentDetails;
