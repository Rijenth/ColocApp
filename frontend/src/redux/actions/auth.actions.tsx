// Authentification actions
import { AnyAction } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../constants/auth.constants";
import { IAuthState } from "../../interfaces/auth.interface";

// Login Actions

export const AloginRequest = (email: string, password: string): AnyAction => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const AloginSuccess = (user: IAuthState): AnyAction => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const AloginFail = (error: string): AnyAction => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

// Logout Actions

export const Alogout = (): AnyAction => {
  return {
    type: LOGOUT,
  };
};

// Register Actions

export const AregisterSuccess = (): AnyAction => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const AregisterFail = (error: string): AnyAction => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};

export const AregisterRequest = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  gender: string,
  birthdate?: Date
): AnyAction => {
  return {
    type: REGISTER_REQUEST,
    payload: { email, password, firstName, lastName, gender, birthdate },
  };
};
