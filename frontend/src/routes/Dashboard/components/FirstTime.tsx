import {
  Button,
  Container,
  Text,
  createStyles,
  Input,
  NumberInput,
} from "@mantine/core";
import { IconPlus, IconUsers } from "@tabler/icons";
import { useState } from "react";
import { openModal, closeAllModals } from "@mantine/modals";

import { createColloc } from "../../../func/colloc.func";

export default function FirstTime() {
  const useStyle = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
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
  });

  const [createCollocData, setCreateCollocData] = useState({
    name: "",
    code: "",
    expense: 0,
  });

  const [loading, setLoading] = useState(false);

  const { classes } = useStyle();

  const handleJoinColoc = () => {
    openModal({
      title: "Rejoindre une collocation",
      children: (
        <Container>
          <Input placeholder="Code de la collocation" maxLength={6} />
        </Container>
      ),
    });
  };

  const handleCreateColoc = () => {
    openModal({
      title: "Créer une collocation",
      children: (
        <Container>
          <Input
            className={classes.modalInput}
            placeholder="Nom de la collocation"
            onChange={(e) =>
              setCreateCollocData({ ...createCollocData, name: e.target.value })
            }
          />
          <Input
            className={classes.modalInput}
            placeholder="Code de la collocation"
            maxLength={6}
            onChange={(e) =>
              setCreateCollocData({ ...createCollocData, code: e.target.value })
            }
          />
          <NumberInput
            className={classes.modalInput}
            placeholder="Combien devez vous payer chaque mois ?"
            onChange={(e) =>
              setCreateCollocData({
                ...createCollocData,
                expense: e as number,
              })
            }
          />
          <Button.Group>
            <Button
              onClick={() => closeAllModals()}
              color="red"
              variant="subtle"
            >
              Annuler
            </Button>
            <Button
              onClick={() => {
                setLoading(true);
                createColloc(createCollocData);
                setLoading(false);
                closeAllModals();
              }}
            >
              Créer
            </Button>
          </Button.Group>
        </Container>
      ),
    });
  };

  return (
    <Container className={classes.container}>
      <Button.Group className={classes.buttonGroup}>
        <Button className={classes.button} onClick={handleCreateColoc}>
          <IconPlus size={55} strokeWidth={2} color="#12acee" />
          <Text className={classes.text}>Créer une collocation</Text>
        </Button>
        <Button className={classes.button} onClick={handleJoinColoc}>
          <IconUsers size={55} strokeWidth={2} color="#12acee" />
          <Text className={classes.text}>Rejoindre une collocation</Text>
        </Button>
      </Button.Group>
    </Container>
  );
}
