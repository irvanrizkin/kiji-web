import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button
} from '@mui/material'
import kijiLogo from '../assets/kiji_only.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('login');
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          <Box style={{ flexGrow: 1 }}>
            <Link to='/'>
              <Box
                component="img"
                sx={{ mr: 2, maxWidth: 100, display: { xs: 'none', md: 'flex' } }}
                src={kijiLogo}
              />
            </Link>
          </Box>
          <Button color="inherit" sx={{mr: 'auto'}} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
