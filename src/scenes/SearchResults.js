import React, {useState, useEffect} from "react";
import ButtonAppBar from "../components/common/ButtonAppBar";

function SearchResults() {
  const [selectedCuisine, setSelectedCuisine] = useState(JSON.parse(window.localStorage.getItem('selectedCuisine')));
  const [selectedFood, setSelectedFood] = useState(JSON.parse(window.localStorage.getItem('selectedFood')));
  const [budget, setBudget] = useState(window.localStorage.getItem('budget'))
  const [searchResult, setSearchResult] = useState();
  const [topCity, setTopCity] = useState({});

  
  useEffect(() => {
    alert ('1')
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };
    console.log(data)
    fetch("http://localhost:5001/travel-foodie-8fe89/us-central1/app/search", {
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
        console.log (topObject)
        setTopCity (topObject)
      })
      .catch(err => alert(err))
  }, [])
  
  return(
    <>
    <ButtonAppBar />
    <h1>Wooohooo.... We've found your dream foodie destination</h1>
    {!topCity ? 
    ( <h2>Loading...</h2>) 
    : (
    <h3>Top City: {topCity.name} {topCity.score}</h3>
    )}
    </>
  )
}



export default SearchResults