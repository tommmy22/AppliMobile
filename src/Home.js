import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MatchBox from './MatchBox';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default class ButtonAppBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      matchs: [],
      championnats: []
    }
  }

  handleChange(e){
    axios.get('https://basketapitom.azurewebsites.net/api/game/championship/' + e.target.value).then(response => {
      this.setState({
        matchs: response.data
      })
    })
  }

  componentDidMount(){
    axios.get('https://basketapitom.azurewebsites.net/api/championship').then(response => {
      console.log(response.data)
      this.setState({
        championnats: response.data
      })
    })
  }
  
  render(){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className='Navbar' position="static">
          <Toolbar>
            <IconButton
              className='ButtonNavbarIcon'
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className='NewsNavbar' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
  
          <Box className='BoxCardJournee'>
              <Card className='HomeCardJournee'>
                  <CardHeader  title="Finale Conference" subheader="Match"/> 
                  <Box className='ListederoulanteBox'>
                  <FormControl>
                    <InputLabel id="simple-select-label">Championnat</InputLabel>
                      <Select className='ListeDeroulante' label="Championnat" labelId="simple-select-label" onChange={(e) => this.handleChange(e)}>
                        {
                          this.state.championnats.map((championnat, key) => 
                          <MenuItem key={key} value={championnat.championshipId}>{championnat.name}</MenuItem>
                          
                          ) 
                        }
                      </Select>
                      </FormControl>
                  </Box>
                  {                   
                    this.state.matchs.map((match, key) => 
                      <MatchBox key={key} match={match} />
                      
                  )
                  
              }
                  
              </Card>
          </Box>
      </Box>
    );
  }
}
