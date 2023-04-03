import React from 'react'
import {Link } from 'gatsby'

function Navbar() {
  return (
    <nav>
         <h1>Web warrior</h1>
        <div className='link'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">Portfolio projects</Link>
        </div>

    </nav>
  )
}

export default Navbar