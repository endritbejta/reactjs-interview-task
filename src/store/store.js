import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categories";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});

export default store;
