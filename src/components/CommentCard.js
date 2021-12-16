import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';
import { Delete } from '@mui/icons-material';


export default function CommentCard({ singleComment }) {
  const { name, comment } = singleComment;
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
        <Button size="small" startIcon={<Delete />}>Remove</Button>
      </CardActions>
    </Card>
  );
}
