import React from 'react';
import PostItem from './PostItem';
import '../styles/App.css'


const PostList = ({posts, titleName, remove}) => {

  if (!posts.length) {
    return (
      <h2 style={{textAlign: 'center'}}>
        No posts
      </h2>
    )
  }

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{titleName}</h2>
      {posts.map((post, index) => <PostItem key={post.id} number={index + 1} post={post} remove={remove}/>)}
    </div>
  );
};

export default PostList;
