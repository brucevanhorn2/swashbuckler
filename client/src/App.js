import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ProjectList from "./components/ProjectList";
import EndpointEditor from "./components/EndpointEditor";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        <Grid container spacing={3}>
            <Grid item xs>
                <ProjectList />
            </Grid>
            <Grid item xs>
                <EndpointEditor />
            </Grid>

        </Grid>
    </div>
  );
}

export default App;
