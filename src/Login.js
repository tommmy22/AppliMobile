import './App.css';
import React from 'react';
import axios from 'axios';



export default class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            login: '',
            password: '',
            loggedIn: false,
            errorMsg: ""
        }
       
    }

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
        errorMsg: ""
    })
}

handleClick(){
    console.log(this.state);

    const logins = {
        email: this.state.login,
        password: this.state.password
      };

    axios.post('https://localhost:5001/api/auth/signin', logins )
    .then(res => {
        localStorage.setItem("access_token", res.data.token);
    }).catch(error => {
        this.setState({
            errorMsg: error.response.data
        })
    });

}

  render(){
    return (
      <div className="Login">
        <div>
            <label>Login</label>
            <input type='text' name='login' onChange={(e) => this.handleChange(e) } />
        </div>
        <div>
            <label>Password</label>
            <input type='text' name='password' onChange={(e) => this.handleChange(e)} /> 
        </div>
            <div>
                <button type="button" onClick={() => this.handleClick()}>Sign In</button>
            </div>
            <div style={{color: "red"}}>
                {this.state.errorMsg}
            </div>
        </div>
     
    );
  }
}
