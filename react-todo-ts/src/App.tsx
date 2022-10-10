import Dashboard from '@/pages/dashboard/Dashboard';
import { customTheme } from '@/theme/customTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />

            {/* Dashboard-Component */}
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
