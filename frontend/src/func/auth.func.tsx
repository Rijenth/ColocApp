import { decodeJwt } from "jose";
import { IUser, IUserRegister } from "../interfaces/users.interface";

export async function login(email: string, password: string) {
  return (
    dispatch: (arg0: {
      type: string;
      user?: { email: string } | IUser;
      error?: string;
    }) => void
  ) => {
    dispatch(request({ email }));

    let body: { email: string; password: string } = {
      email: email,
      password: password,
    };

    // we fetch the backend to get a jwt

    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(
        (response) => {
          if (!response.ok) {
            return Promise.reject(response.statusText);
          }

          return response.json();
        },
        (error) => {
          dispatch(failure(error.toString()));
          return Promise.reject(error);
        }
      )
      .then((jwt) => {
        // we decode the jwt to get the user id
        const decodedJwt = decodeJwt(jwt);

        // we create a session and change the store
        sessionStorage.setItem("coloc-user", jwt);
        dispatch(success(decodedJwt.payload as IUser));
      });
  };

  function request(user: { email: string }) {
    return { type: "LOGIN_REQUEST", user };
  }

  function success(user: IUser) {
    return { type: "LOGIN_SUCCESS", user };
  }

  function failure(error: string) {
    return { type: "LOGIN_FAILURE", error };
  }
}

export async function logout() {
  return (
    dispatch: (arg0: {
      type: string;
      user?: { email: string } | IUser;
      error?: string;
    }) => void
  ) => {
    sessionStorage.removeItem("coloc-user");
    dispatch(success());
  };

  function success() {
    return { type: "LOGOUT_SUCCESS" };
  }
}

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
): Promise<any> {
  let body = {
    uid: generateRandomUid(),
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthdate: birthdate?.toString(),
  };
  return (
    dispatch: (arg0: {
      type: string;
      user?: { email: string } | IUser;
      error?: string;
    }) => void
  ) => {
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("response is ready");
        console.table(response);
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }

        return response.json();
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        return Promise.reject(error);
      })
      .then((jwt) => {
        // we decode the jwt to get the user id
        const decodedJwt = decodeJwt(jwt);

        sessionStorage.setItem("coloc-user", jwt);
        dispatch(success(decodedJwt.payload as IUser));
      });
  };

  function request(user: { email: string }) {
    return { type: "REGISTER_REQUEST", user };
  }

  function failure(error: string) {
    return { type: "REGISTER_FAILURE", error };
  }

  function success(user: IUser) {
    return { type: "REGISTER_SUCCESS", user };
  }
}
