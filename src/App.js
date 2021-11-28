import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import { amber, blue, orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import Home from './scenes/Home';
import SearchResults from './scenes/SearchResults';
import MyAccount from './scenes/MyAccount';
import Footer from './components/common/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: amber[50],
    },
    secondary: {
      main: amber[600],
    },
    buttonTextColor: {
      main: blue [900]
    }


  },
  
});

//auth.currentUser
export const UserContext = createContext(null);


function App() {

  const [user, setUser] = useState(null)
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"))

  const [selectedCuisine, setSelectedCuisine] = useState([])
  const [selectedFood, setSelectedFood] = useState([]);
  const [budget, setBudget] = useState("");
  const [topCity, setTopCity] = useState();
  

  useEffect (() => {
    if (jwt !== null) {
      fetch(`${process.env.REACT_APP_API_URL}/getUser`,
        { headers: {Authorization: jwt}}
        )
        .then((apiResponse) => {
          if ((apiResponse.status === 403) || (apiResponse.status === 500) )
            {
              localStorage.removeItem("jwt")
              return
            }
          return apiResponse.json()
        })
        .then(setUser)
        .catch(alert);
    }
  }, [])

  return (
    <UserContext.Provider
        value={{ user, setUser, jwt, setJwt }}
      >
   <Router>
      <ThemeProvider theme={theme}>
    
    <Routes>
    <Route path ='/MyAccount' element={<MyAccount
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget}
    topCity={topCity}
    />} />
    <Route path ='/SearchResults' 
    element={<SearchResults 
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget}
    topCity={topCity} 
    setTopCity={setTopCity} 
    />} />
   {/* <Route path ='/Login' element={<Login/>} />*/}
    <Route exact path ='/' element={<Home 
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget}
    setTopCity={setTopCity}
    />} />
    </Routes>
    </ThemeProvider>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
