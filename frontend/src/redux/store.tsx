import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
// TODO: Add reducers
export const store = configureStore({
  reducer: {
    user: authSlice.reducer,
  },
});
