import React from "react";
import "./index.css";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainContainer">
      <div className="leftPanel">
        <h1 className="heading1">
          Welcome
          <br />
          Name Here
        </h1>

        <div>
          <h2>Let's Cook!</h2>
        </div>
      </div>
      <div className="rightPanel">
        <div className="choose-option formWindow" display="block">
          <div>
            <h1>Choose Your Options</h1>
            <hr width="100%" />
          </div>

          <Button variant="contained" color="primary">
            Recipes
          </Button>
          <Button variant="contained" color="primary">
            Grocery List
          </Button>
          <Button variant="contained" color="primary">
            In-Stock
          </Button>
          <br />
          <a href="">Manage Account</a>

          <div className="sign-out">
            <hr />
            <Button variant="contained" color="primary">
              SIGN OUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
