import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container
} from '@mui/material'
import kijiLogo from '../assets/kiji_only.png';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ mr: 2, maxWidth: 100, display: { xs: 'none', md: 'flex' } }}
            src={kijiLogo}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;