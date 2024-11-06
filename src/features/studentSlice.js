import { createSlice } from '@reduxjs/toolkit';
import studentsData from '../data/student.json'; // Correctly import students.json

const studentSlice = createSlice({
  name: 'students',
  initialState: studentsData,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.findIndex(student => student.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload);
    }
  }
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
