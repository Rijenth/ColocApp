import {
  Input,
  NumberInput,
  PasswordInput,
  Select,
  Button,
  createStyles,
  Title,
  Divider,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../../func/auth.func";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("undefined");
  const [age, setAge] = useState(0);
  const [firtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    console.log(
      dispatch(await register(email, password, firtName, lastName, gender, age))
    );
  };

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
          onChange={(e) => setEmail(e.currentTarget.value)}
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
          onChange={(e) => setPassword(e.currentTarget.value)}
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
        <NumberInput
          className={classes.formInput}
          placeholder="Age"
          value={age}
          onChange={(e) => {
            if (e != undefined) {
              setAge(e);
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
    border: "1px solid #ccc",
    borderRadius: "18px",
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
