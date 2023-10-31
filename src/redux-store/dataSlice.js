import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    cardData: [],
  },
  reducers: {
    addData: (state, action) => {
      state.cardData = action.payload;
    },
    deleteData: (state) => {
      state.cardData.pop();
    },
  },
});

export const { addData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
