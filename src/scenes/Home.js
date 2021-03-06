import React, {useEffect} from "react";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function Home(
  { 
    selectedCuisine, selectedFood, budget,
    setSelectedCuisine, setSelectedFood, setBudget,
    setTopCity
  }
) {
  
  useEffect (() => {
    setSelectedCuisine([])
    setSelectedFood([])
    setBudget("")
  }, [])

  return(
    <>
    <Navbar />
    <Hero />
    <Main 
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget} 
    setTopCity={setTopCity}
    />
    <Footer />
    </>
  )
}



export default Home