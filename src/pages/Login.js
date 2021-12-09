import React from 'react'
import kijiLogo from '../assets/kiji_simple.png';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Container,
  CssBaseline,
  Box,
  TextField,
  Button,
} from '@mui/material'

function Login() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xs">
        <CssBaseline>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box 
              component="img"
              sx={{
                mx: 'auto',
                display: 'block',
                maxWidth: 300,
                width: '100%',
                mb: 3,
              }}
              src={kijiLogo}
            />
            <TextField 
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              />
            <TextField 
              label='Password'
              variant='outlined'
              fullWidth
              margin='normal'
              type='password'
            />
            <Button
              variant='contained'
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >Log In</Button>
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default Login
