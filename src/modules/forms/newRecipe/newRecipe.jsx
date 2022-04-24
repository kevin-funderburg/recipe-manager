import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Rating,
  Typography,
  IconButton,
} from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Formik } from 'formik';
import { Link } from "react-router-dom";
import axios from "axios";

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
  const [favorite, setFavorite] = useState(false);
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
      //   favorite.length > 0 &&
    ) {
      // Create new recipe
      handleRecipeCreate();

      console.info(`Recipe ${name} added.`);

      // Reset all input fields
      handleInputsReset();
    }
  };

  // Remove recipe
  const handleRecipeRemove = (id, name) => {
    // Send PUT request to 'recipes/delete' endpoint
    axios
      .put("http://localhost:4001/recipes/delete", { id: id })
      .then(() => {
        console.log(`Recipe ${name} removed.`);

        // Fetch all recipes to refresh
        // the recipes on the recipe list
        fetchRecipes();
      })
      .catch((error) =>
        console.error(
          `There was an error removing the ${name} recipe: ${error}`
        )
      );
  };

  // Reset recipe list (remove all recipes)
  const handleListReset = () => {
    // Send PUT request to 'recipes/reset' endpoint
    axios
      .put("http://localhost:4001/recipes/reset")
      .then(() => {
        // Fetch all recipes to refresh
        // the recipes on the recipe list
        fetchRecipes();
      })
      .catch((error) =>
        console.error(`There was an error resetting the recipe list: ${error}`)
      );
  };

  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        width: "100%",
        maxheight: false,
        maxwidth: false,
        "& .MuiTextField-root": { m: "7%", width: "70%" },
        "& .MuiButton-root": {
          width: "auto",
          fontSize: "100%",
          marginLeft: "35%",
          marginTop: "7%",
          marginBottom: "7%",
          bgcolor: "#826F66",
          ":hover": {
            bgcolor: "#C69B7B",
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="mainContainer">
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mt: "auto",
            mb: "auto",
            ml: "auto",
            mr: "auto",
            justify: "center",
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
            <hr></hr>
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
            <hr></hr>
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
                    <MenuItem value={"beef"}>Beef</MenuItem>
                    <MenuItem value={"fish"}>Fish</MenuItem>
                    <MenuItem value={"pork"}>Pork</MenuItem>
                    <MenuItem value={"poultry"}>Poultry</MenuItem>
                    <MenuItem value={"shellfish"}>Shellfish</MenuItem>
                    <MenuItem value={"desert"}>Desert</MenuItem>
                    <MenuItem value={"breakfast"}>Breakfast</MenuItem>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
                  <Button
                    component={Link}
                    id="button-download"
                    name="download"
                    to={{
                      pathname: "/download",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    DOWNLOAD
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" color="primary" type="submit">
                    SAVE
                  </Button>
                </Grid>
              </Grid>

              {/* <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
            </Grid>
          </form>
        </Paper>
      </div>
    </Box>
  );
}

export default NewRecipe;
