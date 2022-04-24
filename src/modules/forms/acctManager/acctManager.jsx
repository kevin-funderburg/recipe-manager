import React, { useEffect, useState } from "react";
import { TextField, Button, Rating, IconButton } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Formik } from 'formik';

function AcctManager() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        width: "100%",
        maxheight: false,
        maxwidth: false,
        "& .MuiTextField-root": { m: 3.3, width: "30ch" },
        "& .MuiButton-root": {
          width: "16ch",
          fontSize: "1.7ch",
          marginLeft: "20ch",
          bgcolor: "#826F66",
          ":hover": {
            bgcolor: "#C69B7B",
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="mainContainer">
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mt: 13,
            mb: 13,
            ml: 20,
            mr: 20,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", paddingTop: "5ch" }}
                >
                  Would you like to change your email address?
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
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
                  sx={{ textAlign: "center", paddingTop: "5ch" }}
                >
                  Would you like to change your password?
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
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
              <Button variant="contained" color="primary">
                CANCEL
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Box>
  );
}

export default AcctManager;
