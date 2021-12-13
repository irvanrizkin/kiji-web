import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  IconButton,
  Avatar,
} from '@mui/material';
import { red } from '@mui/material/colors'
import { Delete } from '@mui/icons-material';

export default function NewsCard({ source, category, image, title, content }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2" color="text.secondary" noWrap="true">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
