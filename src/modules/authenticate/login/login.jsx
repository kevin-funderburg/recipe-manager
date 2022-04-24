import React, { useEffect, useState } from "react";
import "./login.css";
import { TextField, Button, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Paper
          elevation={3}
          sx={{
            width: "80%",
            height: "50%",
            textAlign: "center",
            "& .MuiTextField-root": {
              marginTop: "3%",
              marginBottom: "3%",
              width: "70%",
            },
            "& .MuiButton-root": {
              width: "auto",
              fontSize: "100%",
              marginTop: "7%",
              marginBottom: "7%",
              bgcolor: "#826F66",
              ":hover": {
                bgcolor: "#C69B7B",
              },
            },
            p: 2,
            mt: "auto",
            mb: "auto",
            ml: "auto",
            mr: "auto",
            justify: "center",
            borderRadius: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Login
              </Typography>
            </Grid>
          </Grid>
          <hr width="90%" />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-text-email"
                name="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-text-password"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                component={Link}
                id="button-login"
                name="login"
                to={{
                  pathname: "/myAccount",
                }}
                variant="contained"
                color="primary"
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
          <Typography
            component={Link}
            to={{ pathname: "/myAccount" }}
            variant="body1"
            color="blue"
            sx={{}}
          >
            Forgot Password?
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
