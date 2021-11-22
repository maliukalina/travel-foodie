import React, {useState, useEffect} from "react";
import "./topCity.css";
import ScrollAnimation from "../common/ScrollAnimation";


export default function TopCity({ topCity }) {
  
  return (
    <div>
      <div
        className="textForCity"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
               url(${topCity.url})`,
        }}
      >
        <div className="searchText">
          <h1>Your dream foodie destination</h1>
          <p className="cityName">{topCity.name}</p>
          <ScrollAnimation />
        </div>
      </div>
      
    </div>
  );
}
