import { createSlice } from "@reduxjs/toolkit";
import { IUserRegister } from "../../interfaces/users.interface";

const initialState: IUserRegister = {
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  birthdate: new Date(),
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login Reducers
    loginRequest: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginSuccess: (state, action) => {
      state = action.payload;
    },
    loginFail: (state, action) => {
      state = action.payload;
    },
    // Logout Reducers
    logout: (state) => {
      state = initialState;
    },
    // Register Reducers
    registerRequest: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.birthdate = action.payload.birthdate;
      state.password = action.payload.password;
    },
    registerSuccess: (state) => {
      state = initialState;
    },
    registerFail: (state, action) => {
      state = action.payload;
    },
  },
});
