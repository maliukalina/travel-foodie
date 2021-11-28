import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoImage from './../../travel_foodie_logo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from "../../App";

export default function Navbar() {
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogin = () => {
    navigate('/MyAccount')
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt")
    setUser(null)
    setAnchorEl(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "rgba(0, 0, 0, 0.50)", color: 'aliceblue' }}>
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
            <img src={LogoImage} />
          </Typography>
          {!user ? (
            <Button onClick={handleClickLogin} color="inherit">Login</Button>
          ) : 
          (<Box sx={{display: "flex", flexDirection: "row"}}>
             <Typography sx={{height:"100%", alignSelf:"center"}}> Welcome, {user.displayName ? user.displayName : user.name} </Typography>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClickLogin}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
          )

          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
