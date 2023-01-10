import { Input, NumberInput, PasswordInput, Select } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../../func/auth.func";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(await register(email, password, gender, age));
  };

  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Select
        value={gender}
        data={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
          { label: "Hélicoptère d'assaut", value: "onaimeleshelico" },
        ]}
        onChange={(e) => {
          console.log(e);
        }}
      />
      <NumberInput placeholder="Age" value={age} onChange={(e) => setAge(e)} />
      <button
        onClick={() => {
          dispatch(register(email, password, gender, age));
        }}
      >
        Register
      </button>
    </>
  );
}
