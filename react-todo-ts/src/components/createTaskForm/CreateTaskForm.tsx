// CreateTaskForm.tsx
import { Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

const CreateTaskFormComponent: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2} component="h2" variant="h6">
                Create a Task
            </Typography>
            
            {/* Task-Title */}
            {/* Task-Description */}
            {/* Task-Date */}
            {/* Task-Status */}
            {/* Task-Priority */}
        </Box>
    );
};

export default CreateTaskFormComponent;
