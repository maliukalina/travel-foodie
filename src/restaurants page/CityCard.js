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

export default function CityCard({destinations, setSelectedDestination}) {
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/")
  }
  const handleSelectedDestination = (index) => {
    console.log (index)
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
    {destinations ? destinations.map ( (item, index) => {
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <LocationOn style={{marginRight: "4",fontSize: "20"}}/>
          <span>{item.city}</span>
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
        )   
      })
       :
      (
       <div></div>
      )
    }
    </Grid>
    <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
      variant="contained" 
      style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} sx={{ mt: 3, mb: 2 }}>Find New Destination</Button>
      </Box>
      </Container>
       
     </>
  );
}