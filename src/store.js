import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    custom2: userSlice,
  },
});

export default store;
