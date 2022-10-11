// TaskDescriptionField.tsx
import { ITextField } from '@/components/createTaskForm/interfaces/ITextField';
import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';

const TaskDescriptionFieldComponent: FC<ITextField> = (
    props,
): ReactElement => {
    const {
        onChange = (e) => console.log({ eventTrigger: e }),
        disabled = false,
    } = props;

    return (
        <TextField
            id="description"
            name="description"
            label="Description"
            placeholder="Description"
            variant="outlined"
            size="small"
            multiline
            rows={4}
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default TaskDescriptionFieldComponent;
