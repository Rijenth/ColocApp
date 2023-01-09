import { decodeJwt } from "jose";

export function isLoggedIn() {
  if (sessionStorage.getItem("coloc-user")) {
    return true;
  }
}

export function getUser() {
  if (sessionStorage.getItem("coloc-user")) {
    return decodeJwt(sessionStorage.getItem("coloc-user") as string);
  }
}
