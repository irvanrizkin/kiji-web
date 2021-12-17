import React, { useState } from 'react'
import kijiLogo from '../assets/kiji_simple.png';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Container,
  CssBaseline,
  Box,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material'
import { useFormik } from 'formik';
import backend from '../api/backend';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await backend.post('/users/login', values, { validateStatus: false })
        .then((data) => {
          if (data.status === 200) {
            localStorage.setItem('token', data.data.token);
            navigate('/');
          }
          handleOpen();
        })
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xs">
        <CssBaseline>
          <Paper
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 5,
              borderRadius: 2,
            }}
            elevation={3}
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
            <form onSubmit={formik.handleSubmit}>
              <TextField 
                id='email'
                name='email'
                label='Email'
                variant='outlined'
                fullWidth
                margin='normal'
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                />
              <TextField
                id='password'
                name='password' 
                label='Password'
                variant='outlined'
                fullWidth
                margin='normal'
                type='password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <Button
                variant='contained'
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type='submit'
              >Log In</Button>
            </form>
          </Paper>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Wrong Credential
            </Alert>
          </Snackbar>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default Login
