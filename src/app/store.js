import { configureStore } from '@reduxjs/toolkit';
// Example of correct import if the file is in features
import studentSlice from '../features/studentSlice'; // adjust the path as needed


const store = configureStore({
  reducer: {
    students: studentSlice,
    // Other reducers...
  },
});

export default store;
