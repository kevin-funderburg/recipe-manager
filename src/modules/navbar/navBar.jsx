import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
  },
});

const useStyles = makeStyles((theme) => ({
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
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
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
    </ThemeProvider>
  );
}
export default Navbar;
