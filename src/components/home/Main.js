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

function Main() {
  const [cuisine, setCuisine] = useState();
  const [food, setFood] = useState();
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [budget, setBudget] = useState("")
  
  useEffect(() => {
    fetch("https://travel-foodie-8fe89.web.app/cuisine")
      .then((response) => response.json())
      .then(setCuisine)
      .catch(alert);
  }, []);
  useEffect(() => {
    fetch("https://travel-foodie-8fe89.web.app/food")
      .then((response) => response.json())
      .then(setFood)
      .catch(alert);
  }, []);

  const handleSubmit = (e) => {
    const data = {
      cuisine: selectedCuisine,
      food: selectedFood,
      budget: budget,
    };
    console.log (data)
    fetch("https://travel-foodie-8fe89.web.app/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
      })
      .then ((output) => {
        console.log(output);
        //alert("Item added successfully");
      })
      .catch((err) => alert(err));
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

 /*const navigate = useNavigate();
  const handleClick = () => {
    navigate("/SerchResults");*/


  return (
    <div id="main">
      <h1>Main</h1>
      <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e)}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel style={{ fontSize: "20px" }} component="legend">
              Select up to 5 cuisine you love
            </FormLabel>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel style={{ fontSize: "20px" }} component="legend">
              Pick up to 5 food you love
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
            <Button color={budget === "$$" ? "secondary" : "primary"} value="$$" onClick={(e) => setBudget(e.target.value)} >$$</Button>
            <Button color={budget === "$$$" ? "secondary" : "primary"} value="$$$" onClick={(e) => setBudget(e.target.value)} >$$$</Button>
            <Button color={budget === "$$$$" ? "secondary" : "primary"} value="$$$$" onClick={(e) => setBudget(e.target.value)}>$$$$</Button>
          </ButtonGroup>
          <br />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Main;
