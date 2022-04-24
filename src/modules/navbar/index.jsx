import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6A5638",
  },
  navlinks: {
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontSize: "3.5ch",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "2.5ch",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(3),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          My Cookbook
        </Typography>
        <div className={classes.navlinks}>
          {/* <Link to="/" className={classes.link}>
              Home
            </Link> */}
          <Link to="/newRecipe" className={classes.link}>
            New Recipe
          </Link>
          <Link to="/myAccount" className={classes.link}>
            My Account
          </Link>
          <Link to="/myRecipes" className={classes.link}>
            My Recipes
          </Link>
          <Link to="/groceryList" className={classes.link}>
            Grocery List
          </Link>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
