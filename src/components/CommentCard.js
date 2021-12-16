import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import backend from '../api/backend';

function CommentCard({ singleComment }) {
  const { id, name, comment } = singleComment;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const deleteComment = async () => {
    await backend.delete(`/comments/destroy/${id}`);
    setOpen(false);
    window.location.reload();
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2">
          { comment }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<Delete />} onClick={handleClickOpen}>Remove</Button>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete comment by ${name}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This comment will be deleted permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={deleteComment} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default CommentCard;
