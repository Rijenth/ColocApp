import { AnyAction } from "redux";
export function login(email: string, password: string): AnyAction {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  fetch("http://localhost:3001/api/login", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      // the response will be a jwt token
      if (data.token) {
        sessionStorage.setItem("coloc-user", data.token);
        return { type: "LOGIN_SUCCESS" };
      } else {
        return { type: "LOGIN_FAILURE" };
      }
    })
    .catch((err) => {
      return { type: "LOGIN_FAILURE" };
    });

  return { type: "LOGIN_REQUEST" };
}

export function register(
  email: string,
  password: string,
  gender: string,
  age: Number
) {
  return fetch("http://localhost:3001/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      gender,
      age,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        sessionStorage.setItem("coloc-user", data.token);
        return true;
      } else {
        return false;
      }
    });
}
