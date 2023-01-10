// using mantine and redux we will create a new component
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

import { useParams } from "react-router-dom";

// outer components
import HeaderTabs from "../../components/HeaderTabs";

// inner components
import Resumes from "./components/Resumes";
import RadialChart from "./components/RadialChart";

// styles
import "./styles/index.css";

export default function Dashboard() {
    const data = [
        { name: "John Doe", email: "john.doe@gmail.com", company: "Google" },
        { name: "John Doe", email: "john.doe@gmail.com", company: "Google" },
        { name: "John Doe", email: "john.doe@gmail.com", company: "Google" }
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
                        <RadialChart />
                    </div>
                </SimpleGrid>
                <div className="dashboard__items dashboard__resumes">
                    <Resumes data={data} />
                </div>
            </Container>
        </>
    );
}