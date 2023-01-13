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
  { sum: "100", who: "who", why: "why", category: "category", date: "date" },
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
