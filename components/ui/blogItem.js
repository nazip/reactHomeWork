import React from 'react';
import ReactDOM from 'react-dom';
import Img from '../ui/img'
import TextBox from '../ui/textBox'

class BlogItem extends React.Component {
  render() {
    return  <li>
              <TextBox txt={this.props.item.txt1} />
              <Img imgAttr={this.props.item.img} />
            </li>
  }
};
export default BlogItem;
