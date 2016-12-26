import React from 'react';

class Img extends React.Component {
  render() {
    return React.DOM.img(this.props.img);
  }
};
export default Img;