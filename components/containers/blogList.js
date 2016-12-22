import React from 'react';
import ReactDOM from 'react-dom';
import BlogItem from '../ui/blogItem'

class BlogList extends React.Component {
  render() {
    return  <ul>
              {this.props.BlogListItem.map((item) => (
                <BlogItem item={item} />
              ))
              }
            </ul>
  }
};
export default BlogList;
