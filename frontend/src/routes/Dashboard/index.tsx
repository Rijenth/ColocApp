// using mantine and redux we will create a new component
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
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

const data = [
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test1",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test2",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test3",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test4",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test5",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test6",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test7",
  },
  {
    amount: "100",
    colocataireName: "Kader",
    paidFord: "Other",
    createdAt: "12/12/2021",
    updateAt: "12/12/2021",
    desccription: "Test8",
  },
];

export default function Dashboard() {
  const { element } = useParams();

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
      </Container>
    </>
  );
}
