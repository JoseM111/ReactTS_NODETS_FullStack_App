// Profile.tsx
import { Avatar, Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

const ProfileComponent: FC = (): ReactElement => {
    const avatarStyles = {
        width: '96px',
        height: '96px',
        backgroundColor: 'primary.main',
        marginBottom: '16px',
    };

    //const boxStyles =

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            {/* Avatar */}
            <Avatar sx={avatarStyles}>
                <Typography
                    variant="h4"
                    color="text.primary"
                >
                    Testing
                </Typography>
            </Avatar>

            {/* Name */}
            <Typography variant="h6" color="text.primary">
                Welcome, Alias111
            </Typography>

            {/* Welcome Message */}
            <Typography
                variant="body1"
                color="text.primary"
            >
                This is your personal task manager
            </Typography>
        </Box>
    );
};

export default ProfileComponent;
