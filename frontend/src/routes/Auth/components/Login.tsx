// using redux hooks create a login page with a form to login

import { useState } from "react";
import { useDispatch } from "react-redux";

// Mantine UI
import { Button, Input, Loader } from "@mantine/core";

// Functions
import { login } from "../../../func/auth.func";

// TODO: use redux somewhere (dispatch)

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <form onSubmit={() => dispatch(login(email, password))}>
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
        <Button type="submit" color="blue" disabled={loading}>
          {loading ? <Loader /> : "Login"}
        </Button>
      </form>
    </div>
  );
}
