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
        { sum: "100", who: "who", why: 'why', category: "category", date: "date" },
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