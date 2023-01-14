import {
  Button,
  Container,
  Text,
  createStyles,
  Input,
  NumberInput,
  Title,
} from "@mantine/core";
import { IconPlus, IconUsers } from "@tabler/icons";
import { useState, useEffect } from "react";
import { openModal, closeAllModals } from "@mantine/modals";

import { createColloc, joinColloc } from "../../../func/colloc.func";
import { decodeJwt } from "jose";
import { useToggle } from "@mantine/hooks";

export default function FirstTime() {
  const useStyle = createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    },
    title: {
      marginBottom: "20px",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50%",
      width: "80%",
    },
    button: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "50%",
      backgroundColor: "white",
      borderRadius: "18px",
      border: "1px solid #eaeaea",
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
    text: {
      marginTop: "10px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#333",
    },
    modalInput: {
      width: "100%",
      marginBottom: "10px",
    },
    modal: {
      width: "40vw",
      height: "65vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "18px",
      border: "1px solid #eaeaea",
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
    }
  });




  const [loading, setLoading] = useState(false);

  const { classes } = useStyle();

  const HandleJoinColoc = ({ toggle }) => {
    const [joinCollocData, setJoinCollocData] = useState({
      code: 0,
    });
    return (
      <Container className={classes.modal}>
        <Title className={classes.title}>Rejoindre une collocation</Title>
        <NumberInput
          className={classes.modalInput}
          placeholder="Code de la collocation"
          max={9999}
          value={joinCollocData.code}
          onChange={(e) => setJoinCollocData({ ...joinCollocData, code: e })}
        />
        <Button.Group>
          <Button
            onClick={() => toggle(false)}
            color="red"
            variant="subtle"
          >
            Annuler
          </Button>
          <Button
            onClick={() => {
              joinColloc({
                userUid: decodeJwt(sessionStorage.getItem("ColocUser")).sub
                  .uid as string,
                code: joinCollocData.code,
              });
              closeAllModals();
            }}
            color="blue"
            variant="light"
          >
            Rejoindre
          </Button>
        </Button.Group>
      </Container>
    );

  };



  const HandleCreateColoc = ({ toggle }) => {

    const [createCollocName, setCreateCollocName] = useState("");
    const [createCollocCode, setCreateCollocCode] = useState(0);
    const [createCollocExpectedIncome, setCreateCollocExpectedIncome] = useState(0);

    return (
      <Container className={classes.modal}>
        <Title className={classes.title}>Créer une collocation</Title>
        <Input
          className={classes.modalInput}
          placeholder="Nom de la collocation"
          onChange={(e) => {
            setCreateCollocName(e.target.value);
          }
          }
        />
        <NumberInput
          className={classes.modalInput}
          placeholder="Code de la collocation"
          max={9999}
          onChange={(e) =>
            setCreateCollocCode(e as number)
          }
        />
        <NumberInput
          className={classes.modalInput}
          placeholder="Combien devez vous payer chaque mois ?"
          onChange={(e) =>
            setCreateCollocExpectedIncome(e as number)
          }
        />
        <Button.Group>
          <Button
            onClick={() => toggle(false)}
            color="red"
            variant="subtle"
          >
            Annuler
          </Button>
          <Button
            onClick={() => {
              setLoading(true);
              createColloc({
                name: createCollocName,
                code: createCollocCode,
                expense: createCollocExpectedIncome,
              });
              setLoading(false);
              closeAllModals();
            }}
            variant="light"
          >
            Créer
          </Button>
        </Button.Group>
      </Container>
    );
  };

  const [showCreate, toggleCreate] = useState(false);
  const [showJoin, toggleJoin] = useState(false);

  return (
    <Container className={classes.container}>
      <Title className={classes.title}>
        Vous n'avez pas encore de collocation
      </Title>
      <Title className={classes.title} order={2}>
        Que voulez-vous faire ?
      </Title>
      <Button.Group className={classes.buttonGroup}>
        <Button className={classes.button} onClick={() => toggleCreate(true)}>
          <IconPlus size={55} strokeWidth={2} color="#12acee" />
          <Text className={classes.text}>Créer une collocation</Text>
        </Button>
        <Button className={classes.button} onClick={() => toggleJoin(true)}>
          <IconUsers size={55} strokeWidth={2} color="#12acee" />
          <Text className={classes.text}>Rejoindre une collocation</Text>
        </Button>
      </Button.Group>
      {showCreate && <HandleCreateColoc toggle={toggleCreate} />}
      {showJoin && <HandleJoinColoc toggle={toggleJoin} />}
    </Container>
  );
}
