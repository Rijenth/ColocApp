import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth.reducers";
import { addResumesReducer } from "./reducers/dashboard.reducers";


// TODO: Add reducers
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    addResumes: addResumesReducer,
  },
});
