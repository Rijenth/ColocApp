// using mantine and redux we will create a new component called Auth with
// a dynamic children(Login,Register) depending on the route

import { useParams } from "react-router-dom";

// inner components
import Login from "./components/Login";
import Register from "./components/Register";

export default function Auth() {
  const { authtype } = useParams();
  return <div>{authtype === "login" ? <Login /> : <Register />}</div>;
}
