import React from 'react'
import { Routes, Route } from "react-router-dom";
// import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm';
// import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  
  return (
    <Routes>
      {/* <Navbar /> */}
      <div className="App">
        <Route path="/" element={<AddPostForm/>} /> 
        <Route path="/" element={<PostsList/>} /> 
        {/* <Route path="/posts/:postId" element={<SinglePostPage/>} /> */}
      </div>
    </Routes>
  )
}

export default App
