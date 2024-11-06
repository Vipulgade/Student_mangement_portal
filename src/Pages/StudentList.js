import React, { useState , useContext} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../features/studentSlice';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { StudentContext } from '../context/StudentContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const StudentList = () => {
  const student = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const { students } = useContext(StudentContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;



   
  
    const [combinedStudents, setCombinedStudents] = useState([]); // State to hold the combined list
  
    useEffect(() => {
      // Combine the Redux students and Context students into one array
      const mergedData = [...student, ...students];
      setCombinedStudents(mergedData);
    }, [student, students])
  // Delete student handler
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      dispatch(deleteStudent(id));
    }
  };

  // Filter and sort students
  const filteredStudents = combinedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(student =>
    classFilter ? student.class === classFilter : true
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortKey === 'name') return a.name.localeCompare(b.name);
    if (sortKey === 'class') return a.class.localeCompare(b.class);
    return 0;
  });

  // Pagination logic
  const paginatedStudents = sortedStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );
  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);

  return (
    <div className="container mt-4">
      
      <h2 className="text-center mb-4">Student List</h2>

      <div className="mb-4">
        {/* Search Input */}
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Class Filter Dropdown */}
      <select className="form-select mb-4" onChange={(e) => setClassFilter(e.target.value)}>
  <option value="">All Classes</option>
  <option value="1st">1st</option>
  <option value="2nd">2nd</option>
  <option value="3rd">3rd</option>
  <option value="4th">4th</option>
  <option value="5th">5th</option>
  <option value="6th">6th</option>
  <option value="7th">7th</option>
  <option value="8th">8th</option>
  <option value="9th">9th</option>
  <option value="10th">10th</option>
  <option value="11th">11th</option>
  <option value="12th">12th</option>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduate">Graduate</option>
  <option value="Postgraduate">Postgraduate</option>
  <option value="Doctor">Doctor</option>
</select>


      {/* Sort Buttons */}
      <div className="mb-4">
        <button className="btn btn-outline-primary me-2" onClick={() => setSortKey('name')}>Sort by Name</button>
        <button className="btn btn-outline-primary" onClick={() => setSortKey('class')}>Sort by Class</button>
      </div>

      {/* Student Table */}
      <div className='table-responsive'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Name</th>
            <th style={{ width: '15%' }}>Email</th>
            <th style={{ width: '15%' }}>Class</th>
            <th style={{ width: '15%' }}> Age</th>
            <th style={{ width: '15%' }}>Address</th>
            <th style={{ width: '15%' }}>Phone</th>
            <th style={{ width: '15%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>
              <Link to={`/studentdetails/${student.id}`} className="btn btn-sm btn-outline-primary me-1">

                  <FontAwesomeIcon icon={faEye} /> View
                </Link>
                <Link to={`/students/edit/${student.id}`} className="btn btn-sm btn-outline-secondary me-1">
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </Link>
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(student.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default StudentList;   