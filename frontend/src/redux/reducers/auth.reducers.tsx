import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/users.interface";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Alogin: (state, action) => {
      state.isAuthenticated = true;
      action.payload = null;
    },
    Aregister: (state, action) => {
      state.isAuthenticated = true;
      action.payload = null;
    },
    Alogout: (state, action) => {
      state.isAuthenticated = false;
      action.payload = null;
    },
  },
});

export const { Alogin, Aregister, Alogout } = authSlice.actions;
