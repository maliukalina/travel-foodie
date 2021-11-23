import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import React, {useState} from 'react';
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

function App() {

  const [user, setUser] = useState()
  const [selectedCuisine, setSelectedCuisine] = useState([])
  const [selectedFood, setSelectedFood] = useState([]);
  const [budget, setBudget] = useState("");
  return (
   <Router>
      <ThemeProvider theme={theme}>
    
    <Routes>
    <Route path ='/LoggedIn' element={<LoggedIn setUser={setUser} user={user}/>} />
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
  );
}

export default App;
