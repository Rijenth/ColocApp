export function login(email: string, password: string) {
  // TODO: Change the URL to the backend URL
  return fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
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
