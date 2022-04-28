import React from 'react';
import './download.css';
import { TextField, Button} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import callscript from '../../../lib/callscript'


  // Add New Recipe
  const handleCallscript = () => {
    // Send POST request to 'recipes/create' endpoint
    axios
      .post("http://localhost:4001/download/callscript", {
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
}

function Download(){
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="mainContainer">
                <div className="centerPane">
                    <div className="formWindow" display="block">
                            <p>New Recipe</p>
                            <hr width="90%"/>
                            <p>Enter the URL for the recipe you want to download</p>
                            <TextField
                                required
                                id="url"
                                label="URL"
                                defaultValue="someting.foodnetwork.com"
                            />
                            <br/><br/>
                            <Button component={Link}
                                to={{
                                    pathname: '/newRecipe',
                                }} 
                                variant='contained' 
                                color='primary'>CANCEL
                            </Button>
                            <Button variant='contained' onClick={callscript}
                            color='primary'>OK</Button>

                            {/* <Button variant='contained'
                            color='primary'>OK</Button> */}
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Download;