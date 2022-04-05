import React from 'react';
import './download.css';
import { TextField, Button} from '@mui/material';
import Box from '@mui/material/Box';

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
                            <Button variant='contained' color='primary'>CANCEL</Button>
                            <Button variant='contained' color='primary'>OK</Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Download;