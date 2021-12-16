import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
Container,
CssBaseline,
TextField,
MenuItem,
Typography,
Button,
Snackbar,
Alert,
} from '@mui/material';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import backend from '../api/backend';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      source: '',
      picture: '',
      category: 'world',
    },
    onSubmit: async (values, { resetForm }) => {
      await backend.post('/articles/store', values)
      resetForm({})
      handleOpen()
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const currencies = [
    {
      value: 'politics',
      label: 'Politics',
    },
    {
      value: 'world',
      label: 'World',
    },
    {
      value: 'tech',
      label: 'Tech',
    },
    {
      value: 'celebrity',
      label: 'Celebrity',
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate])

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Container>
          <CssBaseline>
            <Typography variant="h3" sx={{my: 3}}>Create New Article</Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id='title'
                name='title'
                label='Title'
                variant='outlined'
                fullWidth
                margin='normal'
                value={formik.values.title}
                onChange={formik.handleChange}
                />
              <TextField
                id='content'
                name='content'
                label="Content"
                fullWidth
                multiline
                margin='normal'
                minRows={4}
                value={formik.values.content}
                onChange={formik.handleChange}
                />
              <TextField
                select
                id='category'
                name='category'
                label="Category"
                margin='normal'
                fullWidth
                value={formik.values.category}
                onChange={formik.handleChange}
                >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id='source'
                name='source'
                label="Source"
                fullWidth
                margin='normal'
                multiline
                value={formik.values.source}
                onChange={formik.handleChange}
                />
              <TextField
                id='picture'
                name='picture'
                label="Picture URL"
                fullWidth
                margin='normal'
                multiline
                value={formik.values.picture}
                onChange={formik.handleChange}
              />
              <Button variant='contained' sx={{my: 2}} fullWidth type="submit">
                Submit
              </Button>
            </form>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                New Article Added
              </Alert>
            </Snackbar>
          </CssBaseline>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default CreatePage
