import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="flex flex-row justify-center items-center shadow-md p-4 bg-white sticky top-0 left-0 m-0 w-full">
        <NavLink to="/blogs" className="p-4">
            Blogs
        </NavLink> 
        <NavLink to="/create" className="p-4">
            Create Blog
        </NavLink> 
        <NavLink to="/create" className="p-4">
            Update Blogs
        </NavLink> 
    </nav>
  )
}

export default NavBar
