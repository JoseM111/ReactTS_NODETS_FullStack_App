// CreateTaskForm.tsx
import { Box, Stack, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import TaskTitleField from '@/components/createTaskForm/_taskTitleField';
import TaskDescriptionField from '@/components/createTaskForm/_taskDescriptionField';

const CreateTaskFormComponent: FC = (): ReactElement => {
    const stackWidth = { width: '100%' };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            {/* Create-Task-Title */}
            <Typography mb={2} component="h2" variant="h6">
                Create a Task
            </Typography>

            {/* -Stack-Vertically- */}
            <Stack sx={stackWidth} spacing={2}>
                {/* Task-Title */}
                <TaskTitleField />

                {/* Task-Description */}
                <TaskDescriptionField />
            </Stack>

            {/* Task-Date */}
            {/* Task-Status */}
            {/* Task-Priority */}
        </Box>
    );
};

export default CreateTaskFormComponent;
