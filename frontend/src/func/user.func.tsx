import { decodeJwt } from "jose";

export function isLoggedIn() {
  if (sessionStorage.getItem("ColocUser")) {
    return true;
  }
}

export function getUser() {
  if (sessionStorage.getItem("ColocUser")) {
    return sessionStorage.getItem("ColocUser");
  }
}
