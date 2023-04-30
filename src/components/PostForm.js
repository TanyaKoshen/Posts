import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create, remove}) => {
  const [post, setPost] = useState({ title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const  newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: ''})
  }



  return (
    <form >
      {/*Controlled input*/}
      <MyInput
        type="text"
        placeholder="Post Name"
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
      />

      <MyInput
        type="text"
        placeholder="Post Description"
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
      />

      {/*Uncontrolled input*/}
      {/*<MyInput*/}
      {/*  type="text"*/}
      {/*  placeholder="Description"*/}
      {/*  ref={bodyInputRef}*/}
      {/*  onChange={(e) => setDescription(e.target.title)}*/}
      {/*/>*/}
      <MyButton
        type="submit"
        onClick={addNewPost}
      >
        Create Post
      </MyButton>
    </form>
  );
};

export default PostForm;
