import React, { useEffect, useState } from "react";
import { TextField, Button, Rating, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../../../styles/background.jpg";

function NewRecipe() {
  //prepare states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [link, setLink] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [category, setCategory] = useState("");
  const [favorite, setFavorite] = useState(true);
  const [rating, setRating] = useState(0);
  const [recipes, setRecipes] = useState([]);

  //fetch all recipes on initail render
  useEffect(() => {
    fetchRecipes();
  }, []);

  //fetch all recipes
  const fetchRecipes = async () => {
    // Send GET request to 'recipes/all' endpoint
    axios
      .get("http://localhost:4001/recipes/all")
      .then((response) => {
        // Update the recipes state
        setRecipes(response.data);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the recipe list: ${error}`)
      );
  };

  // Reset all input fields
  const handleInputsReset = () => {
    setName("");
    setDescription("");
    setIngredients("");
    setDirections("");
    setLink("");
    setPrepTime(0);
    setCookTime(0);
    setCategory("");
    setFavorite(false);
    setRating(0);
  };

  // Add New Recipe
  const handleRecipeCreate = () => {
    // Send POST request to 'recipes/create' endpoint
    axios
      .post("http://localhost:4001/recipes/create", {
        name: name,
        description: description,
        ingredients: ingredients,
        directions: directions,
        link: link,
        prepTime: prepTime,
        cookTime: cookTime,
        category: category,
        favorite: favorite,
        rating: rating,
      })
      .then((res) => {
        console.log(res.data);

        // Fetch all recipes to refresh
        // the recipes on the Recipe list
        fetchRecipes();
      })
      .catch((error) =>
        console.error(`There was an error adding the ${name} recipe: ${error}`)
      );
  };

  // Submit new recipe
  const handleRecipeSubmit = () => {
    // Check if all fields are filled
    if (
      name.length > 0 &&
      description.length > 0 &&
      ingredients.length > 0 &&
      directions.length > 0 &&
      link.length > 0 &&
      category.length > 0
    ) {
      // Create new recipe
      handleRecipeCreate();

      alert(`Recipe \'${name}\' added to the database.`);

      // Reset all input fields
      handleInputsReset();
    }
  };

  return (
    <Box
      component="div"
      sx={{
        height: "92vh",
        width: "100vw",
        display: "flex",
        justify: "center",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${Image})`,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Paper
          elevation={3}
          sx={{
            width: "60%",
            "& .MuiTextField-root": {
              marginTop: "6%",
              marginBottom: "6%",
              width: "90%",
            },
            "& .MuiButton-root": {
              width: "23%",
              fontSize: "100%",
              marginTop: "7%",
              marginBottom: "7%",
              marginLeft: "10%",
              marginRight: "10%",
              bgcolor: "#E04D01",
              ":hover": {
                bgcolor: "#FF7700",
              },
            },
            ml: "auto",
            mr: "auto",
            p: 2,
            borderRadius: 10,
          }}
        >
          <form onSubmit={handleRecipeSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Add Recipe
                </Typography>
              </Grid>
            </Grid>
            <hr></hr>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-text-name"
                  name="name"
                  label="Recipe Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-text-description"
                  name="description"
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Rating
                  id="rating-button"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="ratingPane"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  id="outlined-text-ingredients"
                  name="ingredients"
                  label="Ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-text-directions"
                  name="directions"
                  label="Directions"
                  value={directions}
                  onChange={(e) => setDirections(e.target.value)}
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-text-link"
                  name="link"
                  label="Link"
                  variant="outlined"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControl sx={{ m: "7%", minWidth: "50%" }}>
                  <InputLabel id="label-category">Category</InputLabel>
                  <Select
                    labelId="outlined-select-category-native"
                    id="outlined-select-category"
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value={"Bread"}>Bread</MenuItem>
                    <MenuItem value={"Beef"}>Beef</MenuItem>
                    <MenuItem value={"Fish"}>Fish</MenuItem>
                    <MenuItem value={"Pork"}>Pork</MenuItem>
                    <MenuItem value={"Poultry"}>Poultry</MenuItem>
                    <MenuItem value={"Shellfish"}>Shellfish</MenuItem>
                    <MenuItem value={"Dessert"}>Dessert</MenuItem>
                    <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-text-prepTime"
                  name="prepTime"
                  label="Prep Time"
                  variant="outlined"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-text-cookTime"
                  name="cookTime"
                  label="Cook Time"
                  variant="outlined"
                  value={cookTime}
                  onChange={(e) => setCookTime(e.target.value)}
                />
              </Grid>
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6} align="right">
                  <Button
                    component={Link}
                    id="button-cancel"
                    name="cancel"
                    to={{
                      pathname: "/",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    CANCEL
                  </Button>
                </Grid>

                <Grid item xs={6} align="left">
                  <Button variant="contained" color="primary" type="submit">
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </Box>
  );
}

export default NewRecipe;
