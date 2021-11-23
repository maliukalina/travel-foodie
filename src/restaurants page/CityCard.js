import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocationOn from '@material-ui/icons/LocationOn'
import { CardActionArea } from '@mui/material';
import { Container } from '@material-ui/core';

export default function CityCard({topCity}) {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/")
  }
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyItems: "self-start",
            paddingTop:"30px",
            paddingBottom:"30px",
            paddingLeft:"30px"
          }}
        >
          <p style={{textDecorationStyle:"solid", fontSize:"2vw"}}>Your Destinations</p>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={topCity.url}
          alt={topCity.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <LocationOn style={{marginRight: "4",fontSize: "20"}}/>
          <span>{topCity.name}</span>
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
      variant="contained" 
      style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} sx={{ mt: 3, mb: 2 }}>Find New Destination</Button>
      </Box>
      </Container>
      
  );
}