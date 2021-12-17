import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  IconButton,
  Avatar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  CardActionArea,
} from '@mui/material';
import { red } from '@mui/material/colors'
import { Delete } from '@mui/icons-material';
import backend from '../api/backend';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  const { articleId, source, category, image, title, content, refreshArticle } = props
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const deleteArticle = async () => {
    await backend.delete(`/articles/destroy/${articleId}`)
    setOpen(false);
    refreshArticle();
  }

  return (
    <Card>
      <CardActionArea component={Link} to={`/detail/${articleId}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {source[0]}
            </Avatar>
          }
          title={source}
          subheader={category.replace(category[0], category[0].toUpperCase())}
        />
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="delete" onClick={handleClickOpen}>
          <Delete />
        </IconButton>
      </CardActions>
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
    </Card>
  );
}
