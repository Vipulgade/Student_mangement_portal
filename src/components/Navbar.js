import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaCog } from 'react-icons/fa'; // Importing icons for user and settings
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Optional: additional custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Student Portal
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">Students List</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Create Account</Link>
            </li>
            <li className="nav-item">
              <Link to="/studentdetails" className="nav-link">Profile</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Profile Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUser /> Profile
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/StudentDetails">My Profile</Link></li>
              <li><Link className="dropdown-item" to="/settings"><FaCog /> Settings</Link></li>
              <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
            </ul>
          </div>

          {/* Login and Signup Buttons */}
          <Link to="/login" className="btn btn-primary me-2">Login</Link>
          <Link to="/signup" className="btn btn-primary">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
