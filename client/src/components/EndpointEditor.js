import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function EndpointEditor() {
    const [verb, setVerb] = React.useState('GET');
    const handleChange = (event) => {
        setVerb(event.target.value);
    };
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Verb</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={verb}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"GET"}>GET</MenuItem>
                    <MenuItem value={"POST"}>POST</MenuItem>
                    <MenuItem value={"PUT"}>PUT</MenuItem>
                    <MenuItem value={"DELETE"}>DELETE</MenuItem>
                    <MenuItem value={"PATCH"}>PATCH</MenuItem>
                </Select>
            </FormControl>

            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
    );
}