import React, {useEffect, useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  // const bodyInputRef = useRef();
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className="App">

      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <br style={{margin: '15px 0px'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPosts} titleName="Posts" remove={removePost}/>

    </div>
  );
}

export default App;
