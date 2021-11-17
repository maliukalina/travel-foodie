import React from "react";
import { useNavigate } from "react-router-dom";
import {Button, TextField} from '@mui/material'
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Login() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/LoggedIn")
  }
  return(
    <div>
      <Navbar />
      <h1>Sign Up</h1>
      {/*<form onSubmit={(e) => {
          e.preventDefault();
      handleSubmit(e)}}>*/}
        <Button type='submit' variant="contained">Sign Up With Google</Button> 
        <h1>Create a new account</h1>
        <form /*onSubmit={handleForm}*/>
        <TextField  id="filled-basic" label="Name" variant="filled" /*value={name} onChange={(e) => setName(e.target.value)} *//>
      <br />
      <TextField id="filled-basic" label="Email" variant="filled" /*value={email} onChange={(e) => setEmail(e.target.value)}*/ />
      <br />
      <TextField id="filled-basic" label="Password" variant="filled" /*value={password} onChange={(e) => setPassword(e.target.value)}*/ />
      <br />
      <br />
      <Button type='submit' variant="contained">Sign Up</Button> 
      </form>
    </div>
  )
}



export default Login