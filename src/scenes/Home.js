import React from "react";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function Home(
  { 
    selectedCuisine, selectedFood, budget,
    setSelectedCuisine, setSelectedFood, setBudget,
    setUser, user
  }
) {
  return(
    <>
    <Navbar user={user}/>
    <Hero />
    <Main 
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget} 
    />
    <Footer />
    </>
  )
}



export default Home