import { React, useState } from "react";
import { TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../styles/background.jpg";
import axios from "axios";

function Download() {
  const [url, setUrl] = useState("");

  // call python script to import recipe via url
  const handleCallscript = (url) => {
    console.log(`in handleCallScript`);
    console.log(`the url is: ${url}`);
    axios
      .post("http://localhost:4001/download/callscript", { url: url })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) =>
        console.error(`There was an error adding the ${url}: ${error}`)
      );
  };

  const handleSubmit = () => {
    handleCallscript(url);
    alert("New Recipe added to Database!");
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
          }}
        >
          <Typography variant="h2" color="white">
            Welcome!
          </Typography>
          <Typography variant="h2" color="white">
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Download Recipe
                  </Typography>
                </Grid>
              </Grid>
              <hr width="90%" />
              <br />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-text-url"
                    name="url"
                    label="Enter a URL"
                    defaultValue="someting.foodnetwork.com"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    component={Link}
                    id="button-cancel"
                    name="cancel"
                    to={{
                      pathname: "/newRecipe",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    id="button-get"
                    name="get"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Get
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Download;
