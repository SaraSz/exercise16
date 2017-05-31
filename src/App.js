import React, { Component } from 'react';
import './App.css';
import Button from "./button.js"

class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        nameValue: "",
        emailValue: ""
      }
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.clearButton = this.clearButton.bind(this);
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
  
   clearButton(event){
      this.setState({
          nameValue: "",
          emailValue: ""
      });
  }
  
  render() {
    return (
      <div className="App">
        <input placeholder="Name" className="nameInput" value={this.state.nameValue} onChange={this.handleInputName}/>
        <input placeholder="Email" className="emailInput" value={this.state.emailValue} onChange={this.handleInputEmail}/>
      
       <Button clearButton={this.clearButton}/>
      </div>

    );
  }
}


export default App;
