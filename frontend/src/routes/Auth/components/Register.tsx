import { Input, NumberInput, PasswordInput, Select } from "@mantine/core";
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

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <Input
          placeholder="First Name"
          value={firtName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <Select
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
          placeholder="Age"
          value={age}
          onChange={(e) => {
            if (e != undefined) {
              setAge(e);
            }
          }}
          required
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Register
        </button>
      </form>
    </>
  );
}
