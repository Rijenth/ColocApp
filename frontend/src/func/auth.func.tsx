import { AnyAction } from "redux";
import { Alogin, Aregister, Alogout } from "../redux/reducers/auth.reducers";
import { decodeJwt } from "jose";
import { IUser } from "../interfaces/users.interface";

export async function login(
  email: string,
  password: string
): Promise<AnyAction> {
  let body: { email: string; password: string } = {
    email: email,
    password: password,
  };

  // we fetch the backend to get a jwt
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    ...body,
  });

  console.log(response);

  // we get the jwt from the response
  const jwt = await response.json();

  // we decode the jwt to get the user id
  const decodedJwt = decodeJwt(jwt);

  // we create a session and change the store
  sessionStorage.setItem("coloc-user", jwt);
  return Alogin({
    state: {
      isAuthenticated: true,
      user: decodedJwt.payload as IUser,
    },
    action: {
      payload: null,
    },
  });
}

export async function register(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  gender: string,
  age: number
): Promise<AnyAction> {
  // the backend expect a json
  let body = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
  };

  const response = fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    ...body,
  });

  console.log(response);

  const jwt = await (await response).json();

  // we decode the jwt to get the user id
  const decodedJwt = decodeJwt(jwt);

  sessionStorage.setItem("coloc-user", jwt);
  return Aregister({
    state: {
      isAuthenticated: true,
      user: decodedJwt.payload as IUser,
    },
    action: {
      payload: null,
    },
  });
}

export function logout(): AnyAction {
  sessionStorage.removeItem("coloc-user");
  return Alogout({
    state: {
      isAuthenticated: false,
      user: null,
    },
    action: {
      payload: null,
    },
  });
}
