import React, {useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Greetings', description: 'hello'},
    {id: 2, title: 'Talk', description: 'blah'},
    {id: 3, title: 'Do', description: 'walk'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts;
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()) ||
      post.description.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


  // const bodyInputRef = useRef();
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'} } onClick={()=>setModal(true)}>
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
