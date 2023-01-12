// this page will allow the user to see his profile and edit it

// Mantine UI
import {
  Button,
  Text,
  Input,
  Select,
  FileInput,
  Container,
  createStyles,
  Title,
  Space,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

// React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "@mantine/hooks";

// Interfaces
import { IUser } from "../../interfaces/users.interface";

//func
import { getUser } from "../../func/user.func";
import { JWTPayload, decodeJwt } from "jose";
import {
  IconArrowLeft,
  IconCheck,
  IconHome,
  IconPencil,
  IconUpload,
} from "@tabler/icons";
export default function Account() {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [editabled, toggleEditabled] = useToggle([false, true]);

  useEffect(() => {
    const jwt = getUser();
    console.table(jwt);
  }, []);

  const { classes } = useStyles();

  return (
    <main id="account_page" className={classes.accountPage}>
      <Container className={classes.accountForm}>
        <Title className={classes.text} order={1}>
          Account
        </Title>
        <Text className={classes.text} size="md">
          Email
        </Text>
        <Input
          className={classes.accountFormInput}
          placeholder="Email"
          disabled={!editabled}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <Text className={classes.text} size="md">
          First Name
        </Text>
        <Input
          className={classes.accountFormInput}
          placeholder="First Name"
          disabled={!editabled}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
        <Text className={classes.text} size="md">
          Last Name
        </Text>
        <Input
          className={classes.accountFormInput}
          placeholder="Last Name"
          disabled={!editabled}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
        <Select
          className={classes.accountFormInput}
          data={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Hélicoptère d'assaut", value: "onaimeleshelico" },
            { label: "-----", value: "undefined" },
          ]}
          disabled={!editabled}
          onChange={(e) => {
            setUser({ ...user, gender: e as string });
          }}
          required
        />
        <Text className={classes.text} size="md">
          Birthdate
        </Text>
        <DatePicker
          className={classes.accountFormInput}
          disabled={!editabled}
          onChange={(e) => {
            setUser({ ...user, birthdate: e as Date });
          }}
        />
        <Text className={classes.text} size="md">
          Avatar
        </Text>
        <FileInput
          icon={<IconUpload size={14} />}
          className={classes.accountFormInput}
          disabled={!editabled}
          onChange={(e) => {
            // todo : create an upload function based on user uid
            console.log(e);
          }}
        />

        <Button.Group className={classes.accountFormButtonGroup}>
          <Button
            className={classes.accountFormButton}
            color="red"
            variant="outline"
            leftIcon={editabled ? <IconArrowLeft /> : <IconPencil />}
            onClick={() => {
              toggleEditabled();
            }}
          >
            {editabled ? "Cancel" : "Edit"}
          </Button>
          <Space mx={5} />

          <Button
            className={classes.accountFormButton}
            leftIcon={editabled ? <IconCheck /> : <IconHome />}
          >
            {editabled ? "Save" : "Back to home"}
          </Button>
        </Button.Group>
      </Container>
    </main>
  );
}

const useStyles = createStyles((theme) => ({
  accountPage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  accountForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "30vw",
    minHeight: "50vh",
    padding: "2vh",
    borderRadius: "18px",
    boxShadow: "0 0 10px #ccc",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  accountFormButtonGroup: {
    alignSelf: "center",
    width: "75%",
    marginBottom: "1vh",
  },
  text: {
    marginBottom: "1vh",
    alignSelf: "flex-start",
    margin: "0 12.5%",
  },
  accountFormInput: {
    width: "75%",
    marginBottom: "1vh",
  },
  accountFormSelect: {
    width: "75%",
    marginBottom: "1vh",
  },
  accountFormFileInput: {
    width: "75%",
    marginBottom: "1vh",
  },
  accountFormButton: {
    width: "75%",
    marginBottom: "1vh",
  },
}));
