import React from 'react'
import {
  Typography,
  Grid
} from '@mui/material'
import NewsCard from '../components/NewsCard';

function GridNews({ news, refreshArticle }) {
  if (news.length === 0) {
    return (
      <Typography variant="h5">No Article Available</Typography>
    )
  }
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {news.map(data => (
        <Grid item xs={4} sm={4} md={4} key={data.id}>
          <NewsCard
            articleId={data.id}
            source={data.source}
            category={data.category}
            image={data.picture}
            title={data.title}
            content={data.content}
            refreshArticle={refreshArticle}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default GridNews
