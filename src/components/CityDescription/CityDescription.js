import React, {useState, useEffect} from "react";

import './cityDescription.css'

function CityDescription({ topCity }) {
  
  const [city, setCity] = useState();
  useEffect(() => {
  if (topCity) {
    fetch(`${process.env.REACT_APP_API_URL}/cities/${topCity.name}`)
      .then((response) => response.json())
      .then(setCity)
      .catch(alert);
  }
  }, [topCity]);

  

  return(
    <>
    <p className="cityDescription">{city && city.description || 'Loading...'}</p>
      <div className="restaurants">Among Top-100 Restaurants in {topCity.name}, there are {topCity.score} restaurants mathing your search crireria</div>
      
      </>
  )
}

export default CityDescription