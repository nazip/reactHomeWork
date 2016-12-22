import React from 'react';
import ReactDOM from 'react-dom';
import BlogList from '../containers/blogList'

class BlogPage extends React.Component {
  render() {
    return  <div>
              {this.props.BlogListItems.map((item, key) => (
                <BlogList item={item} key={key}/>
              ))
              }
            </div>
  }
};
export default BlogPage;
