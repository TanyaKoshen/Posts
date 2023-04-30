import React from 'react';
import PostItem from './PostItem';
import '../styles/App.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';


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
      <h2 style={{textAlign: 'center'}}>
        {titleName}
      </h2>
      <TransitionGroup >

        {posts.map((post, index) =>
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames='post'
          >
            <PostItem number={index + 1} post={post} remove={remove}/>
          </CSSTransition>
          )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
