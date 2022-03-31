import React from 'react';
import './login.css';
import { TextField, Button} from '@mui/material';

function Login(){
    return (
        <div className="mainContainer">
            <div className="leftPane">
                <h1 className='heading1'>Welcome!<br/>
                    Please Log In
                </h1>
            </div>
            <div className="rightPane">
                <div className="loginWindow" display="block">
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
        </div>
    );
}

export default Login;