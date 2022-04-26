import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../styles/background.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "92vh",
          display: "flex",
          backgroundImage: `url(${Image})`,
        }}
      >
        <Box
          sx={{
            width: "50vw",
            height: "92vh",
            display: "flex",
            justify: "center",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" color="#ff6600">
            Welcome!
          </Typography>
          <Typography variant="h2" color="initial">
            Please Log In
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50vw",
            height: "92vh",
            display: "flex",
            justify: "center",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "65%",
              height: "60%",
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
                  Login
                </Button>
              </Grid>
            </Grid>
            <Typography
              component={Link}
              to={{ pathname: "/myAccount" }}
              variant="link"
              color="blue"
              sx={{ display: "block", marginBottom: "1%" }}
            >
              Forgot Password?
            </Typography>
            <Typography variant="link" color="blue" sx={{ display: "inline" }}>
              Don't have an account?
            </Typography>
            <Typography
              component={Link}
              to={{ pathname: "/myAccount" }}
              variant="link"
              color="green"
              sx={{}}
            >
              Sign up
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Login;
