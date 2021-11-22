import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RestaurantCard from "../restaurants page/RestaurantCard";
import TopCity from "../components/city page/TopCity";

function LoggedIn() {
  const [selectedCuisine, setSelectedCuisine] = useState(
    JSON.parse(window.localStorage.getItem("selectedCuisine"))
  );
  const [selectedFood, setSelectedFood] = useState(
    JSON.parse(window.localStorage.getItem("selectedFood"))
  );
  const [budget, setBudget] = useState(window.localStorage.getItem("budget"));
  const [topCity, setTopCity] = useState(
    JSON.parse(window.localStorage.getItem("topCity"))
  );
  const [matchingRestaurants, setMatchingRestaurants] = useState([]);

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
        console.log(topCity);
        setMatchingRestaurants(data);
      })
      .catch(alert);
  }, [topCity]);

  return (
    <>
      <Navbar />
      {!topCity.name ? <h2>Loading...</h2> : <TopCity topCity={topCity} />}
      {!matchingRestaurants ? (
        <h2>Loading...</h2>
      ) : (
        <RestaurantCard
          topCity={topCity}
          matchingRestaurants={matchingRestaurants}
        />
      )}
      <Footer />
    </>
  );
}

export default LoggedIn;
