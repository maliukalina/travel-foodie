import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
/*import MenuIcon from '@mui/icons-material/Menu';*/

export default function ButtonAppBar() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55', color: 'aliceblue' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           {/* <MenuIcon />*/}
          </IconButton>
          <Typography onClick={() =>  navigate('/') } style={{cursor: 'pointer'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Travel Foodie
          </Typography>
          <Button onClick={handleClick} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
