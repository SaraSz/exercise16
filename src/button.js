import React, {Component} from 'react';

class Button extends Component {
  render() {
    return(
      <button 
        className="buttonClass" 
        onClick={this.props.clearButton}>Clear</button>
    );
  }
}

export default Button;