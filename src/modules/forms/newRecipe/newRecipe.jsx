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
                        <p>User Name:
                        <TextField className="textboxSize" placeholder="Enter username"></TextField>
                        </p>
                        <p>Password:</p>
                        <TextField className="textboxSize"placeholder="Enter password"></TextField>
                        <br/><br/>
                        <Button variant='contained' color='primary'>CANCEL</Button>
                        <br/><br/>
                        <Button variant='contained' color='primary'>DOWNLOAD</Button>
                        <br/><br/>
                        <Button variant='contained' color='primary'>SAVE</Button>
                        <br/><br/>
                        <a href=''>Forgot password?</a>
                    </div>
            </div>
            </div>
    );
}

export default NewRecipe;