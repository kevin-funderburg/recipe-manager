import React, { useEffect, useState } from "react";
import { TextField, Button, Rating, IconButton } from "@mui/material";
import { Box, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "../../../styles/background.jpg";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Formik } from 'formik';

function AcctManager() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

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
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    paddingTop: "10%",
                    paddingLeft: "10%",
                  }}
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
                  variant="body2"
                  sx={{ textAlign: "center", paddingTop: "10%" }}
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
