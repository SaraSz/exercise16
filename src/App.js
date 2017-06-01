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
    this.buttonClass = this.buttonClass.bind(this);
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
  
   buttonClass(event){
      this.setState({
          nameValue: "",
          emailValue: ""
      });
  }
  
  render() {
    return (
      <div>
       <MyForm 
          nameValue={this.nameValue} 
          emailValue={this.emailValue} 
          handleInputName={this.handleInputName} 
          handleInputEmail={this.handleInputEmail}/>
      
       <Button 
          buttonClass={this.buttonClass}/>
      </div>

    );
  }
}


export default App;
