import React from 'react'
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

const Navbar: React.FC = () => {


    return (
        // App bar component with static position
        <AppBar position="static">
            {/* Toolbar for holding the content */}
            <Toolbar>
                {/* Stack to arrange elements horizontally with center alignment */}
                <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
                    {/* IconButton for the logo */}

                    {/* Typography component for the title */}
                    <Typography variant="h6" component="div">
                        Tutorial3
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;