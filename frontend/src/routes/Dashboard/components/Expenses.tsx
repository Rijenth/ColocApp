import { useEffect, useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
        }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },

  // When hover on the table row, the background color changes and the icon appears

  tableRow: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "light" ? theme.colors.dark[8] : theme.white,
      color: theme.colorScheme === "light" ? theme.colors.dark[0] : theme.black,
      opacity: 0.3,
      "& td": {
        "& svg": {
          opacity: 1,
        },
      },
    },
  },

  icon: {
    width: "1rem",
    height: "1rem",
    opacity: 0,
    transition: "opacity 150ms ease",
  },
}));

import { ExpensePayload } from "../../../interfaces/data.interface";
import { IconPencilMinus } from "@tabler/icons";
import { updateExpenses } from "../../../func/dashboard.func";
import UpdateResume from "./UpdateResume";

export default function Expenses({ data }: ExpensePayload, setOpenModel: any) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idRow, setIdRow] = useState(0);

  if (data === undefined) {
    return <>
      Une erreur est survenue, veuillez réessayer ultérieurement
    </>
  }

  const rows = data.map((row) => (
    <>
      <tr
        key={row.id}
        className={classes.tableRow}
        onClick={() => (setOpenModal(true), setIdRow(row.id))}
      >
        <td>{row.amount}</td>
        <td>{row.firstName}</td>
        <td>{row.paidFor}</td>
        <td>{row.createdAt}</td>
        <td>{row.description}</td>
        <td>
          <IconPencilMinus className={classes.icon} />
        </td>
      </tr>
    </>
  ));

  return (
    <>
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table sx={{ minWidth: 700 }}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Amount</th>
              <th>Colocataire</th>
              <th>Paid for</th>
              <th>Created at</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>

      <UpdateResume open={openModal} id={idRow} />
    </>
  );
}
