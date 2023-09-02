import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const BigCard: React.FC<Article> = ({
  alt,
  articleContent,
  id,
  imageURL,
  slug,
  title,
}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea href={`/investing/${slug}`}>
        <CardMedia component="img" height="100%" image={imageURL} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {articleContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BigCard
