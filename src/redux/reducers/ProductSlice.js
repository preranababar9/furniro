import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'productData', //slice name 
  initialState: {
    data: [], // Array to hold the Firebase data
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // Set the data array
    },
    clearData: (state) => {
      state.data = []; // Optional: Clear data
    },
  },
});

export const { setData, clearData } = dataSlice.actions;

export default dataSlice.reducer;
