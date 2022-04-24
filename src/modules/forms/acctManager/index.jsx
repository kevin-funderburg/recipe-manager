import React from "react";
import "./index.css";
import { TextField, Button, Rating, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Formik } from 'formik';

function AcctManager() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="mainContainer">
        <div className="centerPane">
          <div className="formWindow" display="block">
            <div className="favPane">
              <h1>Manage your account</h1>
            </div>
            <hr></hr>
            <div className="userInfo">
              <div>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  id="lasttName"
                  label="Last Name"
                  variant="outlined"
                />
                <TextField
                  id="middleInitial"
                  label="Middle Initial"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="emailAddress"
                  label="Email Address"
                  variant="outlined"
                />
                <TextField
                  id="mailingAddress"
                  label="Mailing Address"
                  variant="outlined"
                />
                <TextField id="state" label="State" variant="outlined" />
              </div>
            </div>
            <hr></hr>
            <div className="passwordPane">
              <div>
                <Button variant="contained" color="primary">
                  CANCEL
                </Button>
                <Button variant="contained" color="primary">
                  SAVE
                </Button>
              </div>

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AcctManager;
