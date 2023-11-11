import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./sortingSlice";

const store = configureStore({
  reducer: {
    sort: sortingReducer,
  },
});

export default store;
