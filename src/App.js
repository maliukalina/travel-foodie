import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import React, {createContext, useState} from 'react';
import './App.css';
import { amber, blue, orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import Home from './scenes/Home';
import SearchResults from './scenes/SearchResults';
import LoggedIn from './scenes/LoggedIn';
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

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [selectedCuisine, setSelectedCuisine] = useState([])
  const [selectedFood, setSelectedFood] = useState([]);
  const [budget, setBudget] = useState("");
  const [topCity, setTopCity] = useState();
  
  
  
  return (
    <UserContext.Provider
        value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
      >
   <Router>
      <ThemeProvider theme={theme}>
    
    <Routes>
    <Route path ='/LoggedIn' element={<LoggedIn 
    selectedCuisine={selectedCuisine}
    selectedFood={selectedFood}
    budget={budget}
    setSelectedCuisine={setSelectedCuisine}
    setSelectedFood={setSelectedFood} 
    setBudget={setBudget}
    setUser={setUser} 
    user={user} 
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
    setUser={setUser} 
    user={user}
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
    setUser={setUser} 
    user={user} 
    />} />
    </Routes>
    </ThemeProvider>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
