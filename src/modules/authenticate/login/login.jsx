import React from "react";
import "./index.css";
import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div className="mainContainer">
      <div className="leftPane">
        <h1 className="heading1">
          Welcome!
          <br />
          Please Log In
        </h1>
      </div>
      <div className="rightPane">
        <div className="loginWindow" display="block">
          <h1>Sign In</h1>
          <hr width="100%" />
          <div>
            <label for="username">User Name:</label>
          </div>
          <div>
            <TextField
              id="username"
              className="textboxSize"
              placeholder="Enter username"
            ></TextField>
          </div>

          <div>
            <label for="password">Password:</label>
          </div>
          <div>
            <TextField
              id="password"
              className="textboxSize"
              placeholder="Enter password"
            ></TextField>
          </div>

          <br />
          <Button variant="contained" color="primary">
            SIGN IN
          </Button>
          <br />
          <br />
          <a href="">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
