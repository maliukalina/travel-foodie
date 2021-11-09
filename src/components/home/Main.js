import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Main() {
  const [cuisine, setCuisine] = useState()
  const [food, setFood] = useState()
  /*const [selectedCuisine, setSelectedCuisine] = useState()*/
  useEffect(() => {
    fetch('http://localhost:5000/cuisine')
    .then(response => response.json())
    .then(setCuisine)
    .catch(alert)

  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/food')
    .then(response => response.json())
    .then(setFood)
    .catch(alert)

  }, [])

/*
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
*/
const navigate = useNavigate();
  const handleClick = () => {
    navigate('/SerchResults')
  }

  return(
    <div>

    <h1>Main</h1>
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel sx={{}} component="legend">Select up to 5 cuisine you love</FormLabel>
        <FormGroup sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          {!cuisine
          ?<h2>Loading...</h2>
          :cuisine.map(item => {
            return <FormControlLabel
            control={
              <Checkbox checked={false} /*onChange={handleChange}*/ name={item.id} />
            }
            label={item.name}
          />
          })
          }
        </FormGroup>
      </FormControl>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Pick up to 5  food you love</FormLabel>
        <FormGroup sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          {!food
          ?<h2>Loading...</h2>
          :food.map(item => {
            return <FormControlLabel
            control={
              <Checkbox checked={false} /*onChange={handleChange}*/ name={item.id} />
            }
            label={item.name}
          />
          })
          }
        </FormGroup>
      </FormControl>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'}}>
    <h3>What's your budget</h3>
    <ButtonGroup variant="contained" size="large" aria-label="large button group">
      <Button>$</Button>
      <Button>$$</Button>
      <Button>$$$</Button>
      <Button>$$$$</Button>
    </ButtonGroup>
    <br />
    <Button onClick={handleClick} variant="contained">Search</Button>
    </Box>

    </div>
  )
}


export default Main