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
  }
  render() {
    return (
      <div className="App">
      <input placeholder="Name"/>
      <input placeholder="Email"/>
      </div>

    );
  }
}

export default App;
