import React, { Component } from 'react';

class MyForm extends Component {
    render(){
        return (
        <div>
          
            <input type="text" 
              className="nameValue" 
              onChange={this.props.handleInputName} 
              value={this.props.nameValue}/>
          
            <input type="text" 
              className="emailValue" 
              onChange={this.props.handleInputEmail} 
              value={this.props.emailValue} />
        </div>
        );
    }       
}

export default MyForm;