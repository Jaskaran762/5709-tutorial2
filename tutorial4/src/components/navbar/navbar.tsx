import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {


  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Tutorial4
          </Typography>
          
          {isLoggedIn ? (
            <Stack direction="row" spacing={2}>
              <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
            </Stack>
          ) : (
            <Button component={Link} to="/login" color="inherit">Login</Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
