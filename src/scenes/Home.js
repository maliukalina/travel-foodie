import React from "react";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";
import ButtonAppBar from "../components/common/ButtonAppBar";

function Home() {
  return(
    <>
    <ButtonAppBar />
    <Hero />
    <Main />
    <Footer />
    </>
  )
}



export default Home