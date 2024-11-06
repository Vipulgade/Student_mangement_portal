// src/context/StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
    };

    return (
        <StudentContext.Provider value={{ students, addStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
