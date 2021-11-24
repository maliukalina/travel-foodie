import React, {useState} from "react";
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


export default function RestaurantCard({ matchingRestaurants }) {
  const [clicked, setClicked] = useState(false)
  const [savedRest, setSavedRest] = useState([])
  
  const handleBookmark = (e) => {
   
        let newArray = [...savedRest]
        newArray.push (e.target.value)
        setSavedRest(newArray)
      }

  const handleClick = (e) => {
    e.preventDefault();
    //let tmpMap = clicked
    //tmpMap.set (e.target.id, !clicked.get(e.target.id))
    //e.target.value = !e.target.vaue
    setClicked(!clicked)
    
    //e.target.value= !e.target.value
  }

  return (
    <>
      
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
          //let tmpMap = clicked
          //tmpMap.set(item.id,false)
          //setClicked(tmpMap) 
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ maxWidth: 345, height: 350, display: "flex", flexDirection: "column", justifyContent: "center"}}>
              
              <IconButton onClick={handleClick} value={false} name={item.id} id={item.id} size="large"  style={{position: 'absolute', paddingLeft:"300px"}}>
         
          {clicked ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
          
              </IconButton>
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
    </>
  );
}
