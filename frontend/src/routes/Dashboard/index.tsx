// using mantine and redux we will create a new component
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Button,
} from "@mantine/core";

import { useParams } from "react-router-dom";

// outer components
import HeaderTabs from "../../components/HeaderTabs";

// inner components
import Expenses from "./components/Expenses";
import CreateResume from "./components/CreateResume";
import Graph from "./components/RadialChart";
import BigNum from "./components/BigNum";

// styles
import "./styles/index.css";

import { useState, useEffect } from "react";
import FirstTime from "./components/FirstTime";
import { getExpenses } from "../../func/dashboard.func";
import { decodeJwt } from "jose";

const data = [
  {
    id: 1,
    amount: "100",
    colocataireId: "1",
    colocataireName: "Kader",
    paidFord: "Other",
    date: "date",
    desccription: "Test1",
    colocationId: "1",
  },
  {
    id: 2,
    amount: "100",
    colocataireId: "1",
    colocataireName: "Adrien",
    paidFord: "Other",
    date: "date",
    desccription: "Test1",
    colocationId: "1",
  },
];

const isFirstTime = async () => {
  const user = sessionStorage.getItem("ColocUser");
  if (user) {
    const decoded = decodeJwt(user);
    return decoded.sub.colocation;
  }

};

export default function Dashboard() {
  const { element } = useParams();

  useEffect(() => {
    isFirstTime().then((res) => {
      // if value is null, then it's the first time
      if (res === null) {
        window.location.href = "/firstTime";
      }
    });
  }, []);

  switch (element) {
    case "summary":
      return <Expenses data={data} type={"view"} />;
    case "graph":
      return <Graph type={"view"} />;
    case "bigNum":
      return <BigNum type={"view"} />;
    default:
      return <FullDashboard />;
  }
}

function FullDashboard() {
  return (
    <>
      <HeaderTabs
        user={{ name: "John Doe", image: "https://i.pravatar.cc/300" }}
        tabs={["Dashboard", "Resume", "Settings"]}
      />
      <Container my="md">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Graph type={"items"} />
          <BigNum type={"items"} />
        </SimpleGrid>
        <Expenses data={data} type={"items"} />
        <CreateResume />
        <Button onClick={() => getExpenses()}>Get Expenses</Button>
      </Container>
    </>
  );
}
