import React from "react";
import "./index.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();


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

          <Button variant="contained" color="primary" onClick={() => navigate("myrecipes")}>
            Recipes
          </Button>
          <Button variant="contained" color="primary" onClick={() => navigate("grocerylist")}>
            Grocery List
          </Button>
          <Button variant="contained" color="primary">
            In-Stock
          </Button>
          <br />
          <Link to='myaccount'>Manage Account</Link>

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
