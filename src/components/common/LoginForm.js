import React, {useState} from 'react';
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword,
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
import SignupForm from './SignupForm';


const firebaseConfig = {
  apiKey: "AIzaSyBG6pJBQvnWqBP1OTUpRAYLQqZkDtJIfzo",
  authDomain: "travel-foodie-8fe89.firebaseapp.com",
  projectId: "travel-foodie-8fe89",
  storageBucket: "travel-foodie-8fe89.appspot.com",
  messagingSenderId: "5722804764",
  appId: "1:5722804764:web:f8f81c771b24f4d95e85d9"
};


export default function Login({ setUser, type }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formType, setFormType] = useState("login")
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        fetch(`${process.env.REACT_APP_API_URL}/getUser/${response.user.uid}`)
        .then((apiResponse) => apiResponse.json())
        .then((data) =>
          {
            response.user.displayName = data.name
            setUser(response.user)
        })
        .catch(alert);
      })
      .catch(err => alert(err.message))
  }

  const loginWithGoogle = (event) => {
    event.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(response => {
        let userObj = {
          name: response.user.displayName,
          email: response.user.email,
          uid: response.user.uid
        }
        fetch(`${process.env.REACT_APP_API_URL}/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((apiResponse) => apiResponse.json())
          .then((data) => {
            setUser(data)    
          })
          .catch(alert);
      })
      .catch(err => alert(err.message))
  }

  return (
    <>
    {formType==="login" ? (
    <form onSubmit={handleLogin} >
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
            LOGIN
          </Typography>
          <Button onClick={loginWithGoogle} variant="contained"  sx={{ mt: 3, mb: 2 }}>Login with Google</Button>
          <Typography component="h1" variant="h6">
            OR
          </Typography>
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
              Login
            </Button>
            

            <Button value="signup" onClick={(e) => setFormType(e.target.value)}
              variant="contained"  sx={{ mt: 3, mb: 2 }}>Signup
            </Button>
          </FormControl>
        </Box>
      </Container>
      </form>
    ) : ( 
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <SignupForm setUser={setUser}/>
      <Button value="login" onClick={(e) => setFormType(e.target.value)}
              variant="contained"  sx={{ mt: 3, mb: 2 }}>Login
            </Button>
      </Box>
    )}
      </>
  );
}