import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const BigCard: React.FC = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica ranging across all
            continents except Antarctica ranging across all continents except
            Antarctica ranging across all continents except Antarctica ranging
            across all continents except
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BigCard
