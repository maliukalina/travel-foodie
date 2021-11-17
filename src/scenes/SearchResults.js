import React, {useState, useEffect} from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import TopCity from "../components/second page/TopCity";
import City from "../components/second page/City";


function SearchResults() {
  const [selectedCuisine, setSelectedCuisine] = useState(JSON.parse(window.localStorage.getItem('selectedCuisine')));
  const [selectedFood, setSelectedFood] = useState(JSON.parse(window.localStorage.getItem('selectedFood')));
  const [budget, setBudget] = useState(window.localStorage.getItem('budget'))
  const [searchResult, setSearchResult] = useState();
  const [topCity, setTopCity] = useState({});

  
  useEffect(() => {
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };
    //console.log(data)
    fetch("https://travel-foodie-8fe89.web.app/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        setSearchResult(data)
        let topObject = { 
          name: "",
          score: Math.max.apply(Math, 
          data.matchingCities
          .map(function(o) { return o.score }))
        }
        data.matchingCities.map( item => {
          if (item.score===topObject.score) {topObject.name = item.name}
        })
        
        setTopCity (topObject)
        
      })
      .catch(err => alert(err))
  }, [])
  
  return(
    <>
    <Navbar />
    {(!topCity.name) ? 
    ( <h2>Loading...</h2>) 
    : (<TopCity topCity={topCity}/>)
    }
    {(!topCity.name) ? 
    ( <h2>Loading...</h2>) 
    : (<City topCity={topCity}/>)
    }
    <Footer />
    </>
  )
}



export default SearchResults