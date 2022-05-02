import {React, useState} from 'react';
import './download.css';
import { TextField, Button} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from "axios";

function Download(){

    const [url, setUrl] = useState("");

    // call python script to import recipe via url
    const handleCallscript = (url) => {
        console.log(`in handleCallScript`)
        console.log(`the url is: ${url}`)
        axios
            .post("http://localhost:4001/download/callscript", {url: url})
            .then((res) => {
                console.log(res.data);  
            })
            .catch((error) =>
            console.error(`There was an error adding the ${url}: ${error}`)
            );
    };

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
                                value={url}
                                onChange={(e) => setUrl(e.target.value) } //Add your setVariable to this line
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
                            onClick={(event) => handleCallscript(url)}
                            color='primary'>OK</Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Download;