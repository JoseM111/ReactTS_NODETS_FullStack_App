// TaskArea.jsx
import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskAreaComponent: FC = (): ReactElement => {
    return (
        <Grid item md={8} px={4}>
            <h1>Content Area</h1>
        </Grid>
    );
};

export default TaskAreaComponent;
