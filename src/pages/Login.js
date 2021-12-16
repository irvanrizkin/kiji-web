import React from 'react'
import kijiLogo from '../assets/kiji_simple.png';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Container,
  CssBaseline,
  Box,
  TextField,
  Button,
  Paper,
} from '@mui/material'
import { useFormik } from 'formik';
import backend from '../api/backend';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

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
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default Login
