import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './StudentRegistration.css';

const StudentRegistration = () => {
    const { addStudent } = useContext(StudentContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        className: '',
        address: '',
        phoneNumber: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, age, className, address, phoneNumber } = formData;

        if (!name || !email || !age || !className || !address || !phoneNumber) {
            setError('All fields are required');
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setError('Phone number must be 10 digits');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (age < 1 || age > 100) {
            setError('Age must be between 1 and 100');
            return;
        }

        addStudent({ name, email, age, class: className, address, phone: phoneNumber });

        setFormData({ name: '', email: '', age: '', className: '', address: '', phoneNumber: '' });
        setError('');
        setSuccess('Student registered successfully!');
        setTimeout(() => {
            setSuccess('');
            navigate('/students');
        }, 2000);
    };

    return (
        
                <div className="container mt-4">
                
                    <h2 className="text-center p-3 mb-4 heading">Register Student</h2>
                    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div className="form-box shadow p-4 rounded">
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit} className="shadow rounded">
            <div className="form-group mb-3">
                <label htmlFor="name">Student Name </label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        placeholder="Student Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="age">Age</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-birthday-cake"></i></span>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="age" 
                        name="age" 
                        placeholder="Age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                        min="1" 
                        max="100" 
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="className">Class</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-school"></i></span>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="className" 
                        name="className" 
                        placeholder="Class" 
                        value={formData.className} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="address">Address</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-home"></i></span>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address" 
                        placeholder="Address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        placeholder="Phone Number" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
    </div>


            </div>
        </div>
      
    );
};

export default StudentRegistration;
