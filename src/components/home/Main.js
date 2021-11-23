import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";


function Main(
  { 
    selectedCuisine, selectedFood, budget,
    setSelectedCuisine, setSelectedFood, setBudget
  }
) {
  const [cuisine, setCuisine] = useState();
  const [food, setFood] = useState();

  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cuisine`)
      .then((response) => response.json())
      .then(setCuisine)
      .catch(alert);
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/food`)
      .then((response) => response.json())
      .then(setFood)
      .catch(alert);
  }, []);

  const handleSubmit = (e) => {
    navigate("/SearchResults")
    
  };

  const handleCuisineChange = (e) => {
    if (e.target.checked) {
      if (selectedCuisine.indexOf(e.target.value)===-1) {
        let newArray = [...selectedCuisine]
        newArray.push (e.target.value)
        setSelectedCuisine(newArray)
      }
    } else {
        let itemIndex=selectedCuisine.indexOf(e.target.value)
        if (itemIndex!==-1) {
          let newArray = [...selectedCuisine]
          newArray.splice(itemIndex, 1);
          setSelectedCuisine (newArray)
        }
      }
    }

  const handleFoodChange = (e) => {
    if (e.target.checked) {
      if (selectedFood.indexOf(e.target.value)===-1) {
        let newArray = [...selectedFood]
        newArray.push (e.target.value)
        setSelectedFood(newArray)
      }
    } else {
      let itemIndex=selectedFood.indexOf(e.target.value)
        if (itemIndex!==-1) {
          let newArray = [...selectedFood]
          newArray.splice(itemIndex, 1);
          setSelectedFood (newArray)
        }
    }

  }

  return (
    <div id="main" style={{ backgroundColor: "#E1D6C6"}}>
      <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e)}}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        paddingBottom="20px"
        paddingLeft="20px"
        paddingRight="20px"
      >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel style={{ fontSize: "20px" }} component="legend">
              Select cuisine you love
            </FormLabel>
            
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!cuisine ? (
                <h2>Loading...</h2>
              ) : (
                cuisine.map((item) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "controlled" }}
                          name={item.id}
                          value={item.name} onChange={handleCuisineChange}
                          color="buttonTextColor"
                          
                        />
                      }
                      label={item.name}
                    />
                  );
                })
              )}
            </FormGroup>
          </FormControl>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel style={{ fontSize: "20px" }} component="legend">
              Food restrictions
            </FormLabel>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {!food ? (
                <h2>Loading...</h2>
              ) : (
                food.map((item) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "controlled" }}
                          value={item.name} onChange={handleFoodChange}
                          name={item.id}
                          color="buttonTextColor"
                          id={item.id}
                        />
                      }
                      label={item.name}
                    />
                  );
                })
              )}
            </FormGroup>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>What's your budget</h3>
          <ButtonGroup
            variant="contained"
            size="large"
            aria-label="large button group"
          >
            <Button color={budget === "$" ? "secondary" : "primary"} value="$" onClick={(e) => setBudget(e.target.value)}>$</Button>
            <Button color={budget === "$$ - $$$" ? "secondary" : "primary"} value="$$ - $$$" onClick={(e) => setBudget(e.target.value)} >$$ - $$$</Button>
            <Button color={budget === "$$$$" ? "secondary" : "primary"} value="$$$$" onClick={(e) => setBudget(e.target.value)}>$$$$</Button>
          </ButtonGroup>
          <br />
          <Button style={{marginBottom: "20px"}} type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Main;
