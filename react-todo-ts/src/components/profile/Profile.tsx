// Profile.tsx
import { Avatar, Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
//import PropTypes from 'prop-types';

interface IProfile {
    name: string;
}

const ProfileComponent: FC<IProfile> = (props): ReactElement => {
    const { name = 'Alias111' } = props;

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
                    {`${name.substring(0, 1)}`}
                </Typography>
            </Avatar>

            {/* Name */}
            <Typography variant="h6" color="text.primary">
                {`Welcome, ${name}`}
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

//ProfileComponent.propTypes = {
//    name: PropTypes.string.isRequired,
//};
