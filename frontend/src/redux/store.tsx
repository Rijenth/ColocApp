import { configureStore } from "@reduxjs/toolkit";

import addResumesReducer from "./reducers/dashboard.reducers";

export const store = configureStore({
  reducer: {
    addResumes: addResumesReducer,
  },
});


