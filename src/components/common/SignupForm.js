import React, {useState} from 'react';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const firebaseConfig = {
  apiKey: "AIzaSyBG6pJBQvnWqBP1OTUpRAYLQqZkDtJIfzo",
  authDomain: "travel-foodie-8fe89.firebaseapp.com",
  projectId: "travel-foodie-8fe89",
  storageBucket: "travel-foodie-8fe89.appspot.com",
  messagingSenderId: "5722804764",
  appId: "1:5722804764:web:f8f81c771b24f4d95e85d9"
};

export default function SignupForm({ setUser }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleSignup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        let userObj = {
          name: name,
          email: email,
          uid: response.user.uid
        }
        console.log (JSON.stringify(userObj))
        fetch(`${process.env.REACT_APP_API_URL}/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((apiResponse) => apiResponse.json())
          .then((data) => {
            response.user.displayName = name
            setUser(response.user)    
          })
          .catch(alert);
      })
      .catch(err => alert(err.message))
  }
  return (
    <>
<form onSubmit={handleSignup} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Typography component="h1" variant="h5">
            SIGN UP
          </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name} onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="buttonTextColor" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            
          </FormControl>
        </Box>
      </Container>
      </form>
  </>
  )
}