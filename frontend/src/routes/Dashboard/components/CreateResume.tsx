import {
  createStyles,
  Select,
  TextInput,
  Button,
  Modal,
  Group,
  NumberInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import { useEffect, useState } from "react";

import { createExpenses } from "../../../func/dashboard.func";

import { decodeJwt } from "jose";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function CreateResume(open: boolean) {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [payload, setPayload] = useState({
    amount: 0,
    colocataireUid: decodeJwt(sessionStorage.getItem("ColocUser")).sub
      .uid as string,
    paidFor: "",
    description: "",
    colocationId: 1,
  });

  useEffect(() => {
    setOpened(open);
    setOpened(false);
  }, [open]);

  return (
    <div className="dashboard__items dashboard__resumes">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Resume"
      >
        <TextInput
          label="Desccription"
          placeholder="Description"
          classNames={classes}
          required={true}
          value={payload.description}
          onChange={(e) =>
            setPayload({ ...payload, description: e.currentTarget.value })
          }
        />

        <NumberInput
          style={{ marginTop: 20 }}
          label="Amount"
          placeholder="10.99 $"
          classNames={classes}
          required={true}
          value={payload.amount}
          onChange={(e) => setPayload({ ...payload, amount: e as number })}
        />

        <Select
          style={{ marginTop: 20, zIndex: 2 }}
          data={["loyer", "eletricte", "eau", "nourriture", "autre"]}
          placeholder="Pick one"
          label="Paid ford"
          classNames={classes}
          required={true}
          value={payload.paidFor}
          onChange={(e) => setPayload({ ...payload, paidFor: e as string })}
        />

        <Button.Group>
          <Button
            style={{ marginTop: 20 }}
            color="red"
            variant="subtle"
            onClick={() => setOpened(false)}
          >
            Cancel
          </Button>
          <Button
            style={{ marginTop: 20 }}
            color="blue"
            onClick={() => (createExpenses(payload), console.log(payload))}
          >
            Create
          </Button>
        </Button.Group>
      </Modal>

      <Button onClick={() => setOpened(true)}>Create Resume</Button>
    </div>
  );
}
