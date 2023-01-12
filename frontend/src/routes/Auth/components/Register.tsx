import {
  Input,
  PasswordInput,
  Select,
  Button,
  createStyles,
  Title,
  Divider,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";

import { register } from "../../../func/auth.func";

import { showNotification } from "@mantine/notifications";

import { IconAlertCircle } from "@tabler/icons";
import { DatePicker } from "@mantine/dates";

export default function Register() {
  const today = new Date();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");
  const [gender, setGender] = useState("undefined");
  const [birthdate, setBirthDate] = useState<Date>(today);
  const [firtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async () => {
    if (password !== passwordComfirm) {
      showNotification({
        title: "Error",
        message: "Password and password comfirmation are not the same",
        color: "red",
        icon: <IconAlertCircle />,
      });
      return;
    }
    if (emailRegex.test(email) === false) {
      showNotification({
        title: "Error",
        message: "Email is not valid",
        color: "red",
        icon: <IconAlertCircle />,
      });
      return;
    }
    register(email, password, firtName, lastName, gender, birthdate);
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const { classes } = useStyle();

  return (
    <div className={classes.registerFormWrapper}>
      <form
        className={classes.registerForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Title order={1}>Register</Title>
        <Input
          className={classes.formInput}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          required
        />
        <Input
          className={classes.formInput}
          placeholder="First Name"
          value={firtName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
        <Input
          className={classes.formInput}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />
        <PasswordInput
          className={classes.formInput}
          placeholder="Password"
          value={password}
          error={password.length < 8 || !passwordRegex.test(password)}
          onChange={(e) => setPassword(e.currentTarget.value)}
          rightSection={
            <Tooltip label="This is public" position="top-end" withArrow>
              <div>
                <IconAlertCircle
                  size={18}
                  style={{ display: "block", opacity: 0.5 }}
                />
              </div>
            </Tooltip>
          }
          required
        />
        <PasswordInput
          className={classes.formInput}
          placeholder="Comfirm password"
          value={passwordComfirm}
          onChange={(e) => {
            setPasswordComfirm(e.currentTarget.value);
          }}
          error={passwordComfirm != password ? "Password doesn't match" : ""}
          required
        />
        <Select
          className={classes.formInput}
          value={gender}
          data={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Hélicoptère d'assaut", value: "onaimeleshelico" },
            { label: "-----", value: "undefined" },
          ]}
          onChange={(e) => {
            setGender(e as string);
          }}
          required
        />
        <DatePicker
          className={classes.formInput}
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => {
            if (e != null || e != undefined) {
              setBirthDate(e);
            }
          }}
          required
        />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Register
        </Button>
        <Divider my="sm" className={classes.divider} />
        <Button
          onClick={() => {
            window.location.href = "/auth/login";
          }}
          variant="subtle"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

const useStyle = createStyles((theme) => ({
  registerForm: {
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
  registerFormWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  formInput: {
    width: "50%",
    margin: "1vh 0",
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "#ccc",
  },
}));
