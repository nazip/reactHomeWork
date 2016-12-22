import React from 'react';
import ReactDOM from 'react-dom';

class TextBox extends React.Component {
  render() {
    return <span>{this.props.txt}</span>
  }
};
export default TextBox;