// using mantine and redux we will create a new component called Auth with
// a dynamic children(Login,Register) depending on the route

import { useParams } from "react-router-dom";

// inner components
import Login from "./components/Login";
import Register from "./components/Register";

import { Center } from "@mantine/core";

import { createStyles } from "@mantine/core";

export default function Auth() {
  const { classes } = useStyle();
  const { authtype } = useParams();
  return (
    <main className={classes.main}>
      <Center>{authtype === "login" ? <Login /> : <Register />}</Center>
    </main>
  );
}

const useStyle = createStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));
