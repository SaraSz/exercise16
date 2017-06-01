import React, { Component } from 'react';

class MyForm extends Component {
    render(){
        return (
        <div>
          
            <input type="text" 
              className="nameValue" 
              onChange={this.props.handleInputName} 
              placeholder="Name"
              value={this.props.nameValue}/>
          
            <input type="text" 
              className="emailValue" 
              onChange={this.props.handleInputEmail} 
              placeholder="Email"
              value={this.props.emailValue} />
        </div>
        );
    }       
}

export default MyForm;