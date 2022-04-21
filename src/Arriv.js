import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';



export default class Arriv extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subjects: []
        }
    }

//Fonction pour recuperer donnees 
    componentDidMount(){
    this.updateList();
  }

  updateList(){
    axios
      .get('https://localhost:5001/subject', {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem("access_token")
          }
      })
      .then(res => {
        const subjects = res.data;
        this.setState({subjects});
      })
  }

    handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const subjects = {
        name: this.state.name
      };

      axios.post(`https://localhost:5001/subject`,  subjects )
      .then(_ => {
        this.updateList();
      })
  }

  render(){
      return (
        <div className="Arriv">
            <ul>
                {this.state.subjects.map(subject => <li>{subject.name}</li>)}
            </ul>

            <form onSubmit={this.handleSubmit}>
          <label>
            Add subject:
            <input type="text" name="subject" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
            </form>

        </div>
      )
  }


}
