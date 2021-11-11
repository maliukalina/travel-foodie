import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import React from 'react';
import './App.css';
import { blue, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import Home from './scenes/Home';
import SearchResults from './scenes/SearchResults';
import Login from './scenes/Login';
import LoggedIn from './scenes/LoggedIn';
import Footer from './components/common/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[900],
    },
    secondary: {
      main: pink[400],
    }
  },
  
});

function App() {
  return (
   <Router>
      <ThemeProvider theme={theme}>
     {/*<header>
      <nav style ={{
        padding: '.3em', 
        backgroundColor:'hsl(0, 6%, 83%)', 
        display:'flex',
        justifyContent: 'space-between'}}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/SerchResults">Search Results</NavLink>
        <NavLink exact to="/Login">Sign Up/Login</NavLink>
        <NavLink exact to="/LoggedIn">Logged In Page </NavLink>
      </nav>
      </header>*/}
    <Routes>
    <Route path ='/LoggedIn' element={<LoggedIn/>} />
    <Route path ='/SerchResults' element={<SearchResults/>} />
    <Route path ='/Login' element={<Login/>} />
    <Route exact path ='/' element={<Home/>} />
    </Routes>
    </ThemeProvider>
      </Router>
  );
}

export default App;
