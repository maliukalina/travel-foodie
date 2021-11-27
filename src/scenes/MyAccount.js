import React, {useContext, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LoginForm from "../components/common/LoginForm";
import RestaurantCard from "../restaurants page/RestaurantCard";
import CityCard from "../restaurants page/CityCard";
import { UserContext } from "../App";

function LoggedIn({
  selectedCuisine, selectedFood, budget,
  setSelectedCuisine, setSelectedFood, setBudget,
  topCity
}) {
  const [destinations, setDestinations] = useState ()
  const [selectedDestination, setSelectedDestination] = useState ()
  const [matchingRestaurants, setMatchingRestaurants] = useState([]);
  const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);

  const {user, jwt} = useContext(UserContext)

  useEffect(() => {
    if (user) setDestinations(user.destinations)
  }, [user])

  useEffect(() => {
    if (user) setBookmarkedRestaurants (user.bookmarks)
  }, []);

  useEffect(() => {
    if (user) setBookmarkedRestaurants (user.bookmarks)
  }, [user]);

  useEffect(() => {
    if (user && topCity) {
      let data = {
        cuisine: selectedCuisine,
        food: selectedFood,
        budget: budget,
        city: topCity.name
      }
      let tmpJWT = localStorage.getItem("jwt")
      fetch(`${process.env.REACT_APP_API_URL}/addDestination`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: tmpJWT
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((responseData) => {
        setDestinations(responseData.destinations)
        setSelectedDestination (data)
      })
      .catch(alert);
    }
  }, [user, topCity]);

  useEffect(() => {
    if (selectedDestination) {
    const data = {
      cuisine: selectedDestination.cuisine,
      food: selectedDestination.food,
      budget: selectedDestination.budget,
    };
    fetch(`${process.env.REACT_APP_API_URL}/search/${selectedDestination.city}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log (data)
        setMatchingRestaurants(data);
      })
      .catch(alert);
    }
  }, [selectedDestination]);

  return ( 
    <>
    <Navbar />
    {
       !user ? ( 
        <LoginForm type="login"/>
       ) : (
        <Box>
          <CityCard
            destinations={destinations}
            setSelectedDestination={setSelectedDestination}
          />
          {matchingRestaurants ? (
         
            <RestaurantCard
              matchingRestaurants={matchingRestaurants}
              bookmarkedRestaurants={bookmarkedRestaurants}
              setBookmarkedRestaurants={setBookmarkedRestaurants}
              user={user}
              
            />
            
            ) : (
              
              <p>Select city to view matching restaurants</p>
              

            )
          }
        </Box>
       )
    }
    <Footer />
    </>  
  )
}

export default LoggedIn;
