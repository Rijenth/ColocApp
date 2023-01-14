import { decodeJwt } from "jose";
import { IUser, IUserRegister } from "../interfaces/users.interface";

const generateRandomUid = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export async function register(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  gender: string,
  birthdate?: Date
) {
  let body = {
    uid: generateRandomUid(),
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthdate: birthdate?.toString(),
  };

  fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      // response.body is a ReadableStream, we need to convert it to a string
      // and then we can store it in session storage
      const responseToString = response.text();
      const decodedResponse = JSON.parse(await responseToString);
      if (decodedResponse.token) {
        window.location.href = "/auth/login";
      }
    })
    .catch((error) => {
      return {
        type: "REGISTER_FAILURE",
        error: "Registration failed",
        response: error,
      };
    });
}

export async function logout() {
  sessionStorage.removeItem("ColocUser");
  window.location.href = "/";
}

export async function login(email: string, password: string) {
  let body = {
    email: email,
    password: password,
  };
  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      const responseToString = response.text();
      const decodedResponse = JSON.parse(await responseToString);
      sessionStorage.setItem("ColocUser", decodedResponse.token);
    })
    .then(() => {
      console.log(sessionStorage.getItem("ColocUser"));
      if (sessionStorage.getItem("ColocUser")) {
        window.location.href = "/dashboard";
      }
    })
    .catch((error) => {
      return {
        type: "LOGIN_FAILURE",
        error: "Login failed",
        response: error,
      };
    });
}
