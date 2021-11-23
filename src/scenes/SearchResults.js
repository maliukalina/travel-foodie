import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import CityHero from "../components/CityDescription/CityHero";
import CityDescription from "../components/CityDescription/CityDescription";
import RestaurantCard from "../restaurants page/RestaurantCard";

function SearchResults(
  { 
    selectedCuisine, selectedFood, budget,
    setSelectedCuisine, setSelectedFood, setBudget,
    setUser, user
  }
) {
  
  const [topCity, setTopCity] = useState({});
  const [matchingRestaurants, setMatchingRestaurants] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("topCity", JSON.stringify(topCity));
  }, [topCity]);

  useEffect(() => {
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };

    fetch(`${process.env.REACT_APP_API_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        
        let topObject = {
          name: "",
          score: Math.max.apply(
            Math,
            data.matchingCities.map(function (o) {
              return o.score
            })
          ),
        };
        data.matchingCities.map((item) => {
          if (item.score === topObject.score) {
            topObject.name = item.name
            topObject.url = item.url
          }
        })

        setTopCity(topObject);
      })
      .catch((err) => alert(err));
  }, []);

 

  useEffect(() => {
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };
    fetch(`${process.env.REACT_APP_API_URL}/search/${topCity.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setMatchingRestaurants(data);
      })
      .catch(alert);
  }, [topCity]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/LoggedIn")
  }

  return (
    <>
      <Navbar user={user}/>
      {!topCity.name ? <h2>Loading...</h2> : <CityHero topCity={topCity} />}
      {!topCity.name ? <h2>Loading...</h2> : <CityDescription topCity={topCity} />}
      <RestaurantCard
          topCity={topCity}
          matchingRestaurants={matchingRestaurants}
        />
        <div className="textSign">
      <p>Sign up for free to bookmark restaurants in {topCity.name}</p>
      <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
           style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} type='submit' variant="contained">Sign Up</Button> 
      </div>
      <Footer />
      
    </>
  );
}

export default SearchResults;
