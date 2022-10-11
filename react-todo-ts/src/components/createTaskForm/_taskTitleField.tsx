// TaskTitleField.tsx
import { ITextField } from '@/components/createTaskForm/interfaces/ITextField';
import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';

const TaskTitleFieldComponent: FC<ITextField> = (
    props,
): ReactElement => {
    const {
        onChange = (e) => console.log({ eventTrigger: e }),
        disabled = false,
    } = props;

    return (
        <TextField
            id="title"
            label="Task Title"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default TaskTitleFieldComponent;
