import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
Container,
CssBaseline,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import backend from '../api/backend'
import DetailNews from '../components/DetailNews'

function DetailPage() {
  const [article, setArticle] = useState({})
  const params = useParams();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    async function getArticle() {
      await backend.get(`/articles/show/${params.id}`, { validateStatus: false })
        .then(resp => {
          console.log(resp.data);
          setArticle(resp.data.article)
        })
    }
    getArticle()
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Container sx={{mb: 3}}>
        <CssBaseline>
          <DetailNews article={article} />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default DetailPage
