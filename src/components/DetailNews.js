import { Delete } from '@mui/icons-material';
import { 
Box,
Button,
Typography,
Dialog,
DialogActions,
DialogTitle,
DialogContent,
DialogContentText,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import backend from '../api/backend';
import CommentNews from './CommentNews';

function DetailNews({ article }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  if (article === null) {
    return (
      <>
        <Typography variant="h5" sx={{my: 3}}>Article Not Found</Typography>
      </>
    )
  }

  const { id, title, content, category, source, picture, comments } = article;

  const deleteArticle = async () => {
    await backend.delete(`/articles/destroy/${id}`)
    setOpen(false);
    navigate('/');
  }

  return (
    <>
      <Typography variant="h3" sx={{my: 2}}>{title}</Typography>
      <Typography variant="overline" sx={{my: 2}}>
        By <b>{source}</b> on {category}
      </Typography>
      <br />
      <Button variant="outlined" startIcon={<Delete />} sx={{my: 1}} onClick={handleClickOpen}>
        Remove Article
      </Button>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete article?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This article will be deleted permanently.
            <br />
            <b>{title}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={deleteArticle} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DetailNews
