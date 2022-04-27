import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E04D01",
  },
  navlinks: {
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontSize: "200%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "140%",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    borderLeft: "1px solid white",
    paddingLeft: theme.spacing(2),
    "&:hover": {
      color: "#2A2550",
      borderBottom: "none",
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
          <Link to="/inStock" className={classes.link}>
            In Stock
          </Link>
          <Link to="/" className={classes.link}>
            Log Out
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
