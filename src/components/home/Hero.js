import React from "react";
import "./hero.css"


export default function Hero() {
return(
  <div>
        {/*<div className="bgImage"></div>*/}
        <div className="textBlock">
        <div className="textCell">
          <p className="allText">Our App searches for personalized culinary vacations that promise incredible dinning options. If you love food and want to explore a new destinations, try Foodie Travel App today
          </p>
          </div>
          <div className="textCell">
          <p className="textHeader">Find your ideal Foodie Destination in the World</p>
          <button className="button">Get started</button>
          </div>
          
        </div>
  </div>
)
}