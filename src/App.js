import logo from './logo.svg';
import './App.css';
import React from 'react';
import Arriv from './Arriv';
import Page from './Page';
import Login from './Login';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        
        <Page/><br />
        <Arriv/><br />
        <Login/>
      </div>
    );
  }
}

export default App;
