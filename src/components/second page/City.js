import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import './city.css'

function City({ topCity }) {
  const [city, setCity] = useState();
  useEffect(() => {
    fetch(`http://localhost:5001/travel-foodie-8fe89/us-central1/app/cities/${topCity.name}`)
      .then((response) => response.json())
      .then( (data) => {
        setCity (data)
      })
      .catch(alert);
  }, [topCity]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/Login")
  }
  return(
    <>
    <p className="cityDescription">{city && city.description || 'Loading...'}</p>
      <div className="restaurants">Among Top-100 Restaurants in {topCity.name}, there are {topCity.score} restaurants mathing your search crireria</div>
      <div className="textSign">
      <p>Sign up for free to explore and bookmark restaurants in {topCity.name}</p>
      <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit(e)}}
           style={{ width: "150px", height: "50px", marginBottom: "20px", fontSize: "15px"}} type='submit' variant="contained">Sign Up</Button> 
      </div>
      </>
  )
}

export default City