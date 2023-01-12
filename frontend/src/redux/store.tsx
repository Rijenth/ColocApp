import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth.reducers";

// TODO: Add reducers
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
