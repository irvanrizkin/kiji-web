import { Box, Typography } from '@mui/material'
import React from 'react'
import CommentNews from './CommentNews';

function DetailNews({ article }) {
  if (article === null) {
    return (
      <>
        <Typography variant="h5" sx={{my: 3}}>Article Not Found</Typography>
      </>
    )
  }

  const { title, content, category, source, picture, comments } = article;
  console.log(comments);

  return (
    <>
      <Typography variant="h3" sx={{my: 2}}>{title}</Typography>
      <Typography variant="overline" sx={{my: 2}}>
        By <b>{source}</b> on {category}
      </Typography>
      <Box 
        component="img"
        sx={{
          width: '100%',
        my: 1,
      }}
        src={picture}
      />
      <Typography variant="p" sx={{mb: 3}} style={{whiteSpace: 'pre-wrap'}}>{content}</Typography>
      <Typography variant="h4" sx={{my: 2}}>Comment</Typography>
      <CommentNews comments={comments} />
    </>
  )
}

export default DetailNews
