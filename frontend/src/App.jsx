import Blogs from './pages/Blogs'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import BlogForm from './pages/BlogForm'
import Layout from './pages/Layout'

function App() {

  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Blogs/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/create" element={<BlogForm/>}/>
          <Route path="/update/:id" element={<BlogForm/>}/>
        </Route>
    </Routes>
  )
}

export default App
