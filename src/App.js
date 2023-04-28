import React, {useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Greetings', description: 'hello'},
    {id: 2, title: 'Talk', description: 'blah'},
    {id: 3, title: 'Do', description: 'walk'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})


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
  }

  // get post from child component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 15px'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPosts} titleName="Posts" remove={removePost}/> :

    </div>
  );
}

export default App;
