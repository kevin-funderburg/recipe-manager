import React from 'react';
import './download.css';
import { TextField, Button} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from "axios";
// import callscript from '../../../lib/callscript'


// Add New Recipe
const handleCallscript = (url) => {
    console.log(`in handleCallScript`)
    console.log(`the url is: ${url}`)
    // Send POST request to 'recipes/create' endpoint
    axios
        .get("http://localhost:4001/download/all", {url: url})
        .then((res) => {
        console.log(res.data);
            
        })
        .catch((error) =>
        console.error(`There was an error adding the ${url}: ${error}`)
        );
    // axios
    //     .post("http://localhost:4001/download/callscript", {url: url})
    //     .then((res) => {
    //     console.log(res.data);
            
    //     })
    //     .catch((error) =>
    //     console.error(`There was an error adding the ${url}: ${error}`)
    //     );
};

function Download(){
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="mainContainer">
                <div className="centerPane">
                    <div className="formWindow" display="block">
                            <p>New Recipe</p>
                            <hr width="90%"/>
                            <p>Enter the URL for the recipe you want to download</p>
                            <TextField
                                required
                                id="url"
                                label="URL"
                                defaultValue="someting.foodnetwork.com"
                            />
                            <br/><br/>
                            <Button component={Link}
                                to={{
                                    pathname: '/newRecipe',
                                }} 
                                variant='contained' 
                                color='primary'>CANCEL
                            </Button>
                            <Button variant='contained' 
                            onClick={(event) => handleCallscript("www.foodnetwork.com")}
                            // onClick={callscript}
                            color='primary'>OK</Button>

                            {/* <Button variant='contained'
                            color='primary'>OK</Button> */}
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Download;