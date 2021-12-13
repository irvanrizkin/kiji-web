import React,{ useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Container,
  CssBaseline,
  Typography
} from '@mui/material'
import Navbar from '../components/Navbar';
import GridNews from '../components/GridNews';
import backend from '../api/backend'

function LandingPage() {
  const [articles, setArticles] = useState([])

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    async function getArticle() {
      await backend.get('/articles/index')
        .then(resp => {
          console.log(resp.data);
          setArticles(resp.data.articles)
        })
    }
    getArticle()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Container>
        <CssBaseline>
          <Typography variant="h3" sx={{my: 3}}>Dashboard</Typography>
          <GridNews news={articles} />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default LandingPage