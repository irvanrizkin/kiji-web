import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
Container,
CssBaseline,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import backend from '../api/backend'
import DetailNews from '../components/DetailNews'

function DetailPage() {
  const [article, setArticle] = useState({})
  const params = useParams();
  const navigate = useNavigate()

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  async function handleRefresh() {
    await backend.get(`/articles/show/${params.id}`, { validateStatus: false })
        .then(resp => {
          setArticle(resp.data.article)
        })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    async function getArticle() {
      await backend.get(`/articles/show/${params.id}`, { validateStatus: false })
        .then(resp => {
          setArticle(resp.data.article)
        })
    }
    getArticle()
  }, [params, navigate])

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Container sx={{mb: 3}}>
        <CssBaseline>
          <DetailNews article={article} refreshArticle={handleRefresh} />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}

export default DetailPage
