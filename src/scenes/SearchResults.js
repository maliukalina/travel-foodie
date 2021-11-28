import React, {useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Fab from "../components/common/Fab";
import CityHero from "../components/CityDescription/CityHero";
import CityDescription from "../components/CityDescription/CityDescription";
import RestaurantCard from "../restaurants page/RestaurantCard";
import LoadingAnimation from "../components/common/LoadingAnimation";
import { UserContext } from "../App";

function SearchResults(
  { 
    selectedCuisine, selectedFood, budget,
    setSelectedCuisine, setSelectedFood, setBudget,
    topCity, setTopCity
  }
) {
  
  const {user} = useContext(UserContext)
  const [matchingRestaurants, setMatchingRestaurants] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };
    if (selectedCuisine.length===0) {
      navigate ("/")
      return
    }
    fetch(`${process.env.REACT_APP_API_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
            alert ("There is no restaurants found for your criteria. Please try again")
            navigate ('/')
            return
          }
        setTopCity(data.topCity);
        setMatchingRestaurants(data.matchingRestaurants)
      })
      .catch((err) => alert(err));
  }, []);
  
  const handleSubmit = (e) => {
    navigate("/MyAccount")
  }

  return (
    <>
      <Navbar />
      {!(topCity && topCity.name) ? 
      (
        <Box>
        <LoadingAnimation /> 
        </Box>
      )
      : (
       <Box>
        <CityHero topCity={topCity} />
        <div><p className="cityDescription">{topCity.description}</p></div>
        <div className="restaurants">Among Top-100 Restaurants in {topCity.name}, there are {topCity.restaurantCount} restaurants mathing your search crireria</div>
        {/*<RestaurantCard
          matchingRestaurants={matchingRestaurants}
        />*/}
        {!user ?
        <div className="textSign">
        <p>Sign up for free to bookmark restaurants in {(topCity && topCity.name) ? topCity.name : " "}</p>
      < Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
           style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} type='submit' variant="contained">Sign Up</Button> 
        </div>
        : <div className="textSign">
          <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
          style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} type='submit' variant="contained">Bookmark restaurants</Button>
        </div>
        }
        <Footer />
       
      </Box>
      
      )} 
      
      
    </>
  );
}

export default SearchResults;
