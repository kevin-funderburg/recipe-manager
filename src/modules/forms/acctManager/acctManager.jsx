import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "../../../styles/background.jpg";
import axios from "axios";

function AcctManager() {
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

  // Remove User with input email
  const handleUserRemove = (email) => {
    // Send PUT request to 'users/delete' endpoint
    axios
      .put("http://localhost:4001/users/delete", { email: email })
      .then(() => {
        console.log(`User ${email} removed.`);
      })
      .catch((error) =>
        console.error(`There was an error removing the ${email} user: ${error}`)
      );
  };

  // Add new User with input data
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

  // function to perform delete then add when submit button is clicked.
  const handleUserSubmit = () => {
    // Check if required fields are filled
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      location.length > 0 &&
      contact.length > 0
    ) {
      // remove user with input email
      handleUserRemove(email);

      // create new user with updated info
      handleUserCreate();

      alert(`User ${email} updated.`);

      // Reset all input fields
      handleInputsReset();
    }
  };

  return (
    <Box
      component="div"
      sx={{
        height: "92vh",
        width: "100vw",
        display: "flex",
        justify: "center",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${Image})`,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Paper
          elevation={3}
          sx={{
            width: "50%",
            "& .MuiTextField-root": {
              marginTop: "6%",
              marginBottom: "6%",
              width: "90%",
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
            borderRadius: 10,
          }}
        >
          <form onSubmit={handleUserSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Manage your account
                </Typography>
              </Grid>
            </Grid>
            <hr></hr>
            <br />
            <br />
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
                  name="lasttName"
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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      paddingTop: "10%",
                      paddingLeft: "10%",
                    }}
                  >
                    Enter your registered email address:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-email-input"
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", paddingTop: "10%" }}
                  >
                    Enter your new password:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-password-input"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    alert("Cancelled by User!");
                  }}
                >
                  CANCEL
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" type="submit">
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </Box>
  );
}

export default AcctManager;
