import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../styles/background.jpg";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  // Reset all input fields
  const handleInputsReset = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setContact("");
    setLocation("");
  };

  const handleUserCreate = () => {
    // Send POST request to 'users/create' endpoint
    axios
      .post("http://localhost:4001/users/create", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        location: location,
        contact: contact,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(
          `There was an error adding the ${firstName} user: ${error}`
        );
      });
  };

  const handleUserSubmit = () => {
    // Check if required fields are filled
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    ) {
      // Create new user
      handleUserCreate();

      alert(`Account ${firstName} ${lastName} created.`);

      // Reset all input fields
      handleInputsReset();
    }
  };

  return (
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
          width: "100vw",
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
            width: "50%",
            height: "56%",
            textAlign: "center",
            "& .MuiTextField-root": {
              marginTop: "8%",
              width: "70%",
            },
            "& .MuiButton-root": {
              width: "60%",
              fontSize: "100%",
              marginTop: "5%",
              bgcolor: "#E04D01",
              ":hover": {
                bgcolor: "#FF7700",
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
          <form onSubmit={handleUserSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Create your account
                </Typography>
              </Grid>
            </Grid>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-text-firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-text-lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-text-location"
                  name="location"
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-text-contact"
                  name="contact"
                  label="Contact"
                  variant="outlined"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
                  fullWidth
                  id="button-createAccount"
                  name="login"
                  // component={Link}
                  // to={{
                  //   pathname: "/myRecipes",
                  // }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create your account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}

export default Signup;
