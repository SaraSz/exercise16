import React, {Component} from 'react';

class Button extends Component {
  render() {
    return(
      <button className="clearButton" onClick={this.props.clearButton}>Clear</button>
    );
  }
}

export default Button;