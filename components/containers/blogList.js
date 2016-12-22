import React from 'react';
import ReactDOM from 'react-dom';
import BlogItem from '../ui/blogItem'

class BlogList extends React.Component {
  render() {
    return  <ul>
              {this.props.item.map((item, key) => (
                <BlogItem item={item} key={key} />
              ))
              }
            </ul>
  }
};
export default BlogList;
