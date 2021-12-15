import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container
} from '@mui/material'
import kijiLogo from '../assets/kiji_only.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'>
            <Box
              component="img"
              sx={{ mr: 2, maxWidth: 100, display: { xs: 'none', md: 'flex' } }}
              src={kijiLogo}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
