import React,{ useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Button,
  Container,
  CssBaseline,
  Typography
} from '@mui/material'
import Navbar from '../components/Navbar';
import GridNews from '../components/GridNews';
import backend from '../api/backend'
import { Link, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

function LandingPage() {
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  async function getArticle() {
    await backend.get('/articles/index')
      .then(resp => {
        setArticles(resp.data.articles)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    getArticle()
  }, [navigate])

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Container>
        <CssBaseline>
          <Typography variant="h3" sx={{my: 3}}>Dashboard</Typography>
          <Link to="/insert" style={{ textDecoration: 'none' }}>
            <Button variant="contained" startIcon={<Add />} sx={{my: 2}}>
              Add
            </Button>
          </Link>
          <GridNews news={articles} refreshArticle={getArticle} />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default LandingPage
