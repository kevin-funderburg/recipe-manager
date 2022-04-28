import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../styles/background.jpg";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

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
                component={Link}
                id="button-login"
                name="login"
                to={{
                  pathname: "/myAccount",
                }}
                variant="contained"
                color="primary"
              >
                Create your account
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default Signup;
