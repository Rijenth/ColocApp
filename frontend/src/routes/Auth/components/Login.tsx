// using redux hooks create a login page with a form to login

import { useState } from "react";
import { useDispatch } from "react-redux";

// Mantine UI
import {
  Button,
  Input,
  Loader,
  createStyles,
  Title,
  Divider,
} from "@mantine/core";

// Functions
import { login } from "../../../func/auth.func";

// TODO: use redux somewhere (dispatch)

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    dispatch(await login(email, password));
    setLoading(false);
  };

  const { classes } = useStyle();

  return (
    <div className={classes.loginFormWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className={classes.loginForm}
      >
        <Title order={1}>Se connecter</Title>
        <div className="inputs">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
        </div>
        <Button type="submit" color="blue" disabled={loading}>
          {loading ? <Loader /> : "Login"}
        </Button>
        <Divider className={classes.divider} my="sm" />
        <Button
          color="blue"
          variant="subtle"
          onClick={() => {
            window.location.href = "/auth/register";
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
}

const useStyle = createStyles((theme) => ({
  loginForm: {
    display: "flex",
    minHeight: "50vh",
    padding: "2vh",
    width: "30vw",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "18px",
  },
  loginFormWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "#ccc",
  },
}));
