import React, {useContext, useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import { UserContext } from "../App";

export default function RestaurantCard({ matchingRestaurants, bookmarkedRestaurants, setBookmarkedRestaurants, user }) {

  const {jwt} = useContext(UserContext)

  const handleClick = (item) => {
    let itemIndex=bookmarkedRestaurants.findIndex(arrItem => arrItem.restaurantId === item.id)
    
    let newBookmarkObject = {
      city: item.city,
      restaurantId: item.id
    }

    fetch(`${process.env.REACT_APP_API_URL}/addBookmark`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt
      },
      body: JSON.stringify(newBookmarkObject),
    })
    .then((response) => response.json())
    .catch(alert);

    let tmpBookmarkedRestaurants = bookmarkedRestaurants
    
    if (itemIndex>-1) 
    {
      tmpBookmarkedRestaurants.splice(itemIndex, 1)
    } else {
      tmpBookmarkedRestaurants.push (newBookmarkObject)
    }
    
    setBookmarkedRestaurants ([...tmpBookmarkedRestaurants])
  }

  return (
    <>
      <Box component="main"
      sx={{
        marginTop: 8,
        paddingTop:"30px",
        paddingBottom:"30px",
        paddingLeft:"30px"
      }}>
        <CssBaseline />
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
        {matchingRestaurants.map((item) => {
          let imageURL = `${item.url}`
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ maxWidth: 345, height: 350, display: "flex", flexDirection: "column", justifyContent: "center"}}>
              
              {bookmarkedRestaurants ? (<IconButton onClick={(e) => handleClick(item)}  name={item.id} id={item.id} size="large"  style={{position: 'absolute', paddingLeft:"300px"}}>
              
              {bookmarkedRestaurants.find(arrItem => arrItem.restaurantId === item.id) ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
              </IconButton>)
              : (<div></div>)
              }
                <CardMedia
                  component="img"
                  height="140"
                  image={imageURL}
                  alt={item.name}
                />
                
                <CardContent> 
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {item.rating}
                  </Typography>
                </CardContent>
                <CardActions sx={{alignItems:"end", height: "100%"}}>
                  <Button
                    size="small"
                    href={item.website}
                    target="_blank"
                    color="buttonTextColor"
                  >
                    Website
                  </Button>
                  <Button
                    size="small"
                    href={item.tripAdvisorUrl}
                    target="_blank"
                    color="buttonTextColor"
                  >
                    Trip Advisor
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </Box>
    </>
  );
}
