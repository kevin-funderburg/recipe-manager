import React from 'react';
import './newRecipe.css';
import { TextField, Button} from '@mui/material';
import { Formik } from 'formik';

function NewRecipe(){
    return (
        <div className="mainContainer">
            <div className="centerPane">
                <div className="formWindow" display="block">
                        <p>New Recipe</p>
                        <hr width="90%"/>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue="recipe name"
                        />
                        
                        <br/><br/>
                        <TextField
                            id="outlined-multiline-static"
                            label="Ingredients"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Directions"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                        <br/><br/>
                        <TextField id="outlined-basic" label="Link" variant="outlined" />
                        <br/><br/>
                        <TextField id="outlined-basic" label="Prep Time" variant="outlined" />
                        <br/><br/>
                        <TextField id="outlined-basic" label="Cook Time" variant="outlined" />
                        <br/><br/>
                        <Button variant='contained' color='primary'>CANCEL</Button>
                        <Button variant='contained' color='primary'>DOWNLOAD</Button>
                        <Button variant='contained' color='primary'>SAVE</Button>
                    </div>
            </div>
            </div>
    );
}

export default NewRecipe;