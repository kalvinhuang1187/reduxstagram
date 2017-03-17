import React from 'react';
import Photo from './Photo';
// import comments

const Single = React.createClass({
  render() {
    // need index of the post
    // get us the post
    const i = this.props.posts.findIndex((post) => 
      post.code === this.props.params.postId);
    const post = this.props.posts[i];
    console.log(i);
    console.log(post);
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
})

export default Single;
