import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        nameValue: "",
        emailValue: ""
      }
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
  }
  
  handleInputName(event){
    this.setState({
      nameValue: event.target.value
    })
  }
  
  handleInputEmail(event) {
    this.setState({
      emailValue : event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
      
        <input placeholder="Name" className="nameInput" value={this.state.nameValue} onChange={this.handleInputName}/>
        <input placeholder="Email" className="emailInput" value={this.state.emailValue} onChange={this.handleInputEmail}/>
      </div>

    );
  }
}

export default App;
