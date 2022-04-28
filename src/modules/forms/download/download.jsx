import React from 'react';
import './download.css';
import { TextField, Button} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import callscript from '../../../lib/callscript'


const callscript = () => {
    console.log("entering callscript");
    var spawn = require('child_process');
    console.log("spawn made");

    var childPython = spawn('python3', ['src/lib/download.py', 'www.someurl.com']);

    childPython.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

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
                            <Button variant='contained' onClick={callscript}
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