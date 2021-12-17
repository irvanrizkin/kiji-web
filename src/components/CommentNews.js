import {
Grid,
Typography,
} from '@mui/material';
import React from 'react';
import CommentCard from './CommentCard';

function CommentNews({ comments, refreshArticle }) {
  if (!comments) {
    return (
      <>
        <Typography variant="h5" sx={{my: 3}}>Comment cannot be loaded</Typography>
      </>
    )
  }

  if (comments.length === 0) {
    return (
      <>
        <Typography variant="h5" sx={{my: 3}}>No Comment Yet</Typography>
      </>
    )
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {comments.map((comment) => (
        <Grid item xs={4} sm={4} md={4} key={comment.id}>
          <CommentCard singleComment={comment} refreshArticle={refreshArticle} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CommentNews
