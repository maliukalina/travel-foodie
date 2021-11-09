import React from "react";
import {Button, TextField} from '@mui/material'
import ButtonAppBar from "../components/common/ButtonAppBar";

function Login() {
  return(
    <div>
      <ButtonAppBar />
      <h1>Sign Up</h1>
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