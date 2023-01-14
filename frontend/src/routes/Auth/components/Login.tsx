// using redux hooks create a login page with a form to login

import { useState, useEffect } from "react";

// Mantine UI
import {
  Button,
  Input,
  Loader,
  createStyles,
  Title,
  Divider,
  PasswordInput,
  Space
} from "@mantine/core";

// Functions
import { login } from "../../../func/auth.func";
import { getUser } from "../../../func/user.func";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setLoading(true);
    login(email, password)
    setLoading(false);
  };

  const { classes } = useStyle();

  useEffect(() => {
    if (getUser()) {
      window.location.href = "/dashboard";
    }
  }, []);

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
          <Space my="xl" />
          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
          {
            error && <p style={{ color: "red" }}>{error}</p>
          }
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
    borderRadius: "18px",
    boxShadow: "0 0 10px #ccc",
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
