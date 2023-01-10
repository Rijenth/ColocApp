import { AnyAction } from "redux";
import { Alogin, Aregister, Alogout } from "../redux/reducers/auth.reducers";
import { decodeJwt } from "jose";
import { IUser } from "../interfaces/users.interface";

export async function login(
  email: string,
  password: string
): Promise<AnyAction> {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  // we fetch the backend to get a jwt
  const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    body: formData,
  });

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
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("gender", gender);
  formData.append("age", age.toString());

  // we fetch the backend to get a jwt
  // then login the user

  console.log(formData);

  const response = fetch("http://localhost:3001/auth/register", {
    method: "POST",
    body: formData,
  });

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
