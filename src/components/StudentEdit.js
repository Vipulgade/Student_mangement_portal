import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from '../features/studentSlice';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector(state => state.students.find(s => s.id === parseInt(id)));

  // State for all input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setAge(student.age);
      setClassName(student.class);
      setAddress(student.address);
      setPhone(student.phoneNumber);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent({
      id: student.id,
      name,
      email,
      age,
      class: className,
      address,
      phoneNumber: phone,
    }));
    navigate('/students');
  };

  if (!student) return <p className="text-danger">Student not found</p>;

  return (
    <div className="container my-5">
    
      <h2 className="mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter student's name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter student's email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder="Enter student's age"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Class</label>
          <input
            type="text"
            className="form-control"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            placeholder="Enter student's class"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter student's address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter student's phone number"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Student</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/students')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default StudentEdit;
