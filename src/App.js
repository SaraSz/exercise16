import React, { Component } from 'react';
import './App.css';
import Button from "./button.js"
import MyForm from "./MyForm.js"

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
      <div>
       <MyForm 
          nameValue={this.state.nameValue} 
          emailValue={this.state.emailValue} 
          handleInputName={this.handleInputName} 
          handleInputEmail={this.handleInputEmail}/>
      
       <Button 
          clearButton={this.clearButton}/>
      </div>

    );
  }
}


export default App;
