import React from "react";
import Button from "@mui/material/Button";
import "./hero.css"


export default function Hero() {
  const handleGetStarted = () => {
    document.getElementById('main').scrollIntoView({ behavior: 'smooth' })
  }
return(
  <div>
        <div className="textBlock">
        <div className="allText">Our App searches for personalized culinary vacations that promise incredible dinning options. If you love food and want to explore a new destinations, try Foodie Travel App today
        </div>
          <div className="textCell">
          <p className="textHeader">Find your ideal Foodie Destination in the World</p>
          <button onClick={handleGetStarted} className="button">Get started</button>
          </div>
          
        </div>
  </div>
)
}