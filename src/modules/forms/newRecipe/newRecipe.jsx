import React from 'react';
import './newRecipe.css';
import { TextField, Button} from '@mui/material';

function NewRecipe(){
    return (
        <div className="mainContainer">
            <div className="centerPane" display="block">
                    <p>Sign In</p>
                    <hr width="90%"/>
                    <p>User Name:</p>
                    <TextField className="textboxSize" placeholder="Enter username"></TextField>
                    <p>Password:</p>
                    <TextField className="textboxSize"placeholder="Enter password"></TextField>
                    <br/><br/>
                    <Button variant='contained' color='primary'>SIGN IN</Button>
                    <br/><br/>
                    <a href=''>Forgot password?</a>
                </div>
            </div>
    );
}

export default NewRecipe;