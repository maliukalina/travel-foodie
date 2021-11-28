import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import LocationOn from '@material-ui/icons/LocationOn'
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { Container } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

export default function CityCard({destinations, selectedDestination, setSelectedDestination}) {
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/")
  }
  const handleSelectedDestination = (index) => {
    setSelectedDestination(index)
  }
  return (
    <>
    <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            paddingTop:"30px",
            paddingBottom:"30px",
            paddingLeft:"30px"
          }}
        >
          <p style={{textDecorationStyle:"solid", fontSize:"2vw"}}>Your Destinations</p>
      
    {destinations ? (
    <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    paddingBottom="20px"
    paddingLeft="20px"
    paddingRight="20px"
  >
    {destinations.map ( (item, index) => {
    let cardColor = "white"
    if (selectedDestination)
      {
        if (selectedDestination.city===item.city) {
          cardColor = "#fff8e1"
      }
      }
    return (
    <Grid item xs={12} sm={6} md={3}>
    <Card   onClick={(e) => handleSelectedDestination(item)} sx={{ maxWidth: 345, display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.url}
          alt={item.city}
        />
        <CardContent sx={{bgcolor:cardColor}}>
          <Typography gutterBottom variant="h5" component="div">
          <LocationOn style={{marginRight: "4",fontSize: "20"}}/>
          <span>{item.city}</span>
          
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
        )   
      })}

      <Grid item xs={12} sm={6} md={3}>
      <Card onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}  sx={{ maxWidth: 345, height: 212, display: "flex", flexDirection: "column", justifyContent: "center", alignContent:"center"}}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div"> Find New Destination</Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      </Grid>
    )
       :
      (
        <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    paddingBottom="20px"
    paddingLeft="20px"
    paddingRight="20px"
  >
        <Grid item xs={12} sm={6} md={3}>
        <Card onClick={(e) => {
            e.preventDefault();
            handleSubmit(e)}}  sx={{ maxWidth: 345, height: 212, display: "flex", flexDirection: "column", justifyContent: "center", alignContent:"center"}}>
        <CardActionArea>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div"> Find New Destination</Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        </Grid>
      )
    }
    
    
      </Box>
      </Container>
       
     </>
  );
}