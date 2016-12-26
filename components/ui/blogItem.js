import React from 'react';
import ReactDOM from 'react-dom';
import Img from '../ui/img'
import TextBox from '../ui/textBox'

class BlogItem extends React.Component {
  render() {
    const {img, val} = this.props.item;
    return  <li>
              <TextBox txt={val} />
              <Img img={img} />
            </li>
  }
};
export default BlogItem;
