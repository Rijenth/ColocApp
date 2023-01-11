// this page will allow the user to see his profile and edit it

// Mantine UI
import { Button, Text, Input, Select, FileInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

// React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Interfaces
import { IUser } from "../../interfaces/users.interface";

//func
import { getUser } from "../../func/user.func";
import { JWTPayload, decodeJwt } from "jose";
export default function Account() {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    if (getUser() !== null) {
      console.log(getUser());
    }
  }, []);

  return <></>;
}
