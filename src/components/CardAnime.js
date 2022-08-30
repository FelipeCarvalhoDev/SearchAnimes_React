import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardAnime({ anime }) {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        height="345"
        image={anime.images.jpg.image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {anime.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {anime.synopsis}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth={true} href={"/details/" + anime.mal_id}>Detalhes</Button>
        <Button variant="outlined" fullWidth={true} href={anime.trailer.url ? anime.trailer.url : "#"} disabled={anime.trailer.url ? false : true} target="_blank">Trailer</Button>
      </CardActions>
    </Card>
  )
}

export default CardAnime