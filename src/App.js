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
  }
  
  handleInputName(event){
    this.setState({
      nameValue: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
      
        <input placeholder="Name" className="nameInput" value={this.state.nameValue} onChange={this.handleinputName}/>
        <input placeholder="Email" className="emailInput"/>
      </div>

    );
  }
}

export default App;
