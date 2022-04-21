import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import Arriv from './Arriv';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
  

const Root = () => {
  return(
    <Router>
      <Routes>
        <Route path='/page' element={<Page />} />
        <Route path='/arriv' element={<Arriv />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/' element={<App />}/>
      </Routes>
    </Router>
  )
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
