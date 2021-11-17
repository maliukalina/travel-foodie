import React,{useState, useEffect} from "react";
import "./topCity.css";
import ScrollAnimation from "../common/ScrollAnimation";

export default function TopCity({ topCity }) {

  return (
    <div>
      <div
        className="textForCity"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
               url(https://travel-foodie-8fe89.web.app/image/${topCity.name.toLowerCase()}.jpeg`,
        }}
      >
        <div className="searchText">
          <h1>Wooohooo.... We've found your dream foodie destination</h1>
          <p className="cityName">{topCity.name}</p>
          <ScrollAnimation />
        </div>
      </div>
      
    </div>
  );
}
