// using mantine and redux we will create a new component
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

import { useParams } from "react-router-dom";

// outer components
import HeaderTabs from "../../components/HeaderTabs";

// inner components
import Resumes from "./components/Resumes";
import CreateResume from "./components/CreateResume";
import RadialChart from "./components/RadialChart";

// styles
import "./styles/index.css";

export default function Dashboard() {
    const data = [
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test1"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test2"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test3"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test4"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test5"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test6"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test7"},
        { amount: "100", colocataireName: "Kader", paidFord: "Other", createdAt: "12/12/2021", updateAt: "12/12/2021", desccription: "Test8"},
    ];

    const theme = useMantineTheme();
    return (
        <>
            <HeaderTabs
                user={{ name: 'John Doe', image: 'https://i.pravatar.cc/300' }}
                tabs={['Dashboard', 'Resume', 'Settings']}
            />
            <Container my="md">
                <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <div className="dashboard__items">
                        <RadialChart />
                    </div>
                    <div className="dashboard__items">
                        <h1 className="dashboard__number">10</h1>
                    </div>
                </SimpleGrid>
                <div className="dashboard__items dashboard__resumes">
                    <Resumes data={data} />
                </div>
                <div className="dashboard__items dashboard__resumes">
                    <CreateResume />
                </div>
            </Container>
        </>
    );
}