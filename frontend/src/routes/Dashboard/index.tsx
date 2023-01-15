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
import { useState, useEffect } from "react";

// outer components
import HeaderTabs from "../../components/HeaderTabs";

// inner components
import Expenses from "./components/Expenses";
import CreateResume from "./components/CreateResume";
import Graph from "./components/RadialChart";
import BigNum from "./components/BigNum";

// styles
import "./styles/index.css";

import { getExpenses } from "../../func/dashboard.func";
import { decodeJwt } from "jose";
import { ExpensePayload } from "../../interfaces/data.interface";

const dataSave = [
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

export default function Dashboard() {
  const { element } = useParams();

  /* useEffect(() => {
    isFirstTime().then((res) => {
      // if value is null, then it's the first time
      if (res === null) {
        window.location.href = "/firstTime";
      }
    });
  }, []); */

  switch (element) {
    /*     case "summary":
          return <Expenses data={data} type={"view"} />;
        case "graph":
          return <Graph type={"view"} />;
        case "bigNum":
          return <BigNum type={"view"} />; */
    default:
      return <FullDashboard />;
  }
}

function FullDashboard() {

  const [userData, setUserData] = useState({
    firstName: "Kader",
    lastName: "Boukraa",
    uid: "1",
    colocation: "1",
    picture: "https://i.pravatar.cc/300"
  })

  const [tableData, setTableData] = useState();

  useEffect(() => {
    const user = sessionStorage.getItem("ColocUser");
    if (user) {
      const decoded = decodeJwt(user);
      setUserData(decoded.sub)
    }
    getExpense();
  }, []);

  useEffect(() => {
    if (userData.colocation === null) {
      window.location.href = "/firstTime";
    }
  }, [userData]);

  const getExpense = () => {
    const colocationId = decodeJwt(sessionStorage.getItem("ColocUser")).sub.colocation;
    fetch(`http://localhost:5500/api/expense/colocation/${colocationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    ).then((response) => response.json())
      .then((res) => {
        let data: ExpensePayload[] = [];
        res[0].map((item: ExpensePayload) => {
          const expense: ExpensePayload = {
            id: item.id,
            amount: item.amount,
            colocataireId: item.colocataireId,
            firstName: item.firstName,
            createdAt: item.createdAt,
            paidFor: item.paidFor,
            description: item.description,
            colocationId: item.colocationId,
          };
          data.push(expense);
        });
        setTableData(data);
      })
      .catch((error) => {
        console.log(error);
      }
      );
  }


  return (
    <>
      <HeaderTabs
        user={{
          name: `${userData.firstName} ${userData.lastName}`, image: `${userData.picture}`
        }}
        tabs={[{
          name: "Dashboard",
          route: "/dashboard",
        }, {
          name: "Expenses",
          route: "/dashboard/summary",
        }, {
          name: "Graph",
          route: "/dashboard/graph",
        }, {
          name: "BigNum",
          route: "/dashboard/bigNum",
        },
        ]}
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

        <Expenses data={tableData} type={"items"} />
        <CreateResume getData={getExpense} />
      </Container>
    </>
  );
}
