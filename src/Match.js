import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default class Match extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){
      return (
        
        <a className='textLinkMatch' href={"/match/" + this.props.match.gameId}>
          <Card className='HomeCardMatch'>
              <CardContent className='EquipeMatch'>
                  <Box className='boxCardMatch'>
                      <img className='logoEquipe' alt="équipe1" src={this.props.match.homeTeam.imageUrl}/>
                      <Box>
                          <p className='textMatch'>{this.props.match.homeTeam.name} VS {this.props.match.extTeam.name}</p>
                      </Box>
                      <img className='logoEquipe' alt="équipe2" src={this.props.match.extTeam.imageUrl}/>  
                  </Box>
              </CardContent>
          </Card>
        </a>  
      
          
      );
    }
  }