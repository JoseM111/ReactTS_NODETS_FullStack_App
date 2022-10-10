// Dashboard.jsx
import Sidebar from "@/components/sidebar/Sidebar"
import TaskArea from "@/components/taskarea/TaskArea"
import { Grid } from '@mui/material';
import { FC, ReactElement } from 'react';

const DashboardComponent: FC = (): ReactElement => {
    const systemProps = {
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            {/* content-area */}
            <TaskArea />

            {/* sidebar-area */}
            <Sidebar sx={systemProps} />
        </Grid>
    );
};

export default DashboardComponent;
