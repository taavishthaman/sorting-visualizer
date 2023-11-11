import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  algorithm: "",
  numbers: [],
  isSorting: false,
  isComplete: false,
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setAlgorithm(state, action) {
      state.algorithm = action.payload;
    },
    setNumbers(state, action) {
      state.numbers = action.payload;
    },
    setSorting(state, action) {
      state.isSorting = true;
    },
    setComplete(state, action) {
      state.isComplete = true;
      state.isSorting = false;
    },
    setReset(state, action) {
      state.isSorting = false;
      state.isComplete = false;
    },
  },
});

export const { setAlgorithm, setNumbers, setSorting, setComplete, setReset } =
  sortingSlice.actions;

export default sortingSlice.reducer;
