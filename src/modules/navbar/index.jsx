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
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
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
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/myaccount" className={classes.link}>
              My Account
            </Link>
            <Link to="/myrecipes" className={classes.link}>
              My Recipes
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