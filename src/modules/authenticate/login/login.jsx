import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../styles/background.jpg";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [userFound, setUserFound] = useState(false);

  //fetch all users on initail render
  useEffect(() => {
    fetchUserList();
  }, []);

  //fetch all users
  const fetchUserList = async () => {
    // Send GET request to 'users/all' endpoint
    axios
      .get("http://localhost:4001/users/all")
      .then((response) => {
        // Update the users state
        setUsers(response.data);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the users list: ${error}`)
      );
  };

  const handleClick = () => {
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (element.email == email && element.password == password) {
        setUserFound(true);
        break;
      }
      alert("User not found.");
      return;
    }
  };

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
            "& .MuiPaper-root": {
              bgcolor: "rgba(255,255,255, 0.8)",
            },
          }}
        >
          <Paper
            sx={{
              width: "65%",
              ml: "20%",
            }}
          >
            <Typography variant="h2" color="#E04D01">
              Welcome!
            </Typography>
            <Typography variant="h2" color="#E04D01">
              Please Log In
            </Typography>
          </Paper>
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
                bgcolor: "#E04D01",
                ":hover": {
                  bgcolor: "#FF7700",
                },
              },
              p: 2,
              ml: "auto",
              mr: "auto",
              justify: "center",
              borderRadius: 10,
            }}
          >
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Login
                  </Typography>
                </Grid>
              </Grid>
              <hr />
              <br></br>
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
                  {userFound ? (
                    <Button
                      component={Link}
                      id="button-login"
                      name="login"
                      to={{
                        pathname: "/myRecipes",
                      }}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      id="button-check"
                      name="check"
                      variant="contained"
                      onClick={handleClick}
                      color="primary"
                      type="submit"
                    >
                      Check
                    </Button>
                  )}
                </Grid>
              </Grid>
              <Typography
                component={Link}
                to={{ pathname: "/myAccount" }}
                variant="link"
                color="#E04D01"
                sx={{ display: "block", marginBottom: "1%" }}
              >
                Forgot Password?
              </Typography>
              <Typography
                variant="link"
                color="black"
                sx={{ display: "inline" }}
              >
                Don't have an account?
              </Typography>
              <Typography
                component={Link}
                to={{ pathname: "/signup" }}
                variant="link"
                color="#E04D01"
                sx={{}}
              >
                Sign up
              </Typography>
            </form>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Login;
