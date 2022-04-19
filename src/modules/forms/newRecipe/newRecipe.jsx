import React from 'react';
import './newRecipe.css';
import { TextField, Button, Rating, IconButton} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Formik } from 'formik';
import { Link } from 'react-router-dom';

function NewRecipe(){
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
                    <div className="formWindow" display="block">
                        <div className="favPane">
                            <p>New Recipe</p>
                            <TextField
                                required
                                id="name"
                                placeholder="recipe name"
                            />
                            <Rating name="rating" value={null} className="ratingPane"/>
                        </div>
                        <hr></hr>
                        <div className="ingredientsPane">
                            <div className="ingredientLabel">
                                <p style={{paddingLeft: 10}}>Ingredients</p>
                                <TextField
                                    id="ingredients"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    />
                            </div>
                            <div className="directionsPane">
                                <div className="directionsLabel">
                                    <p style={{paddingLeft: 10}}>Directions</p>
                                    <TextField
                                        id="directions"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        />
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="categoryPane">
                        <TextField id="link-to-source" label="Link" variant="outlined" />
                            <TextField id="preptime" label="Prep Time" variant="outlined" />
                            <TextField id="cooktime" label="Cook Time" variant="outlined" />
                            <br/><br/>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="category">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"age"}
                                    label="Category"
                                    // onChange={handleChange}
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
                            
                            {/* <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                            <br/><br/>
                            <Button component={Link}
                                to={{
                                    pathname: '/',
                                }}
                                variant='contained' color='primary'>CANCEL</Button>
                            <Button component={Link}
                                to={{
                                    pathname: '/download',
                                }}
                                variant='contained'
                                color='primary'>DOWNLOAD</Button>
                            <Button variant='contained' color='primary'>SAVE</Button>
                        </div>
                            
                    </div>
                </div>
        </Box>
    );
}

export default NewRecipe;