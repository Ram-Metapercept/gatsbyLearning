import React from 'react';
import { Link,graphql,useStaticQuery } from 'gatsby';
import "./header.css"

function Header() {
  const data=useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
        author
      }
    }
  }
  `)

  let title=data.site.siteMetadata.title
  console.log(title)
  return (
    <React.Fragment>
   < h1 className='title'>{title}</h1>

      <nav>
        <ul className='nav-list'>
          <li>
            <Link  className='nav-item' to="/">Home</Link>
            
          </li>
          <li>
            <Link   className='nav-item' to="/about">About</Link>
            
          </li>
          <li >
            <Link   className='nav-item' to="/blog">Blog</Link>
            
          </li>
          <li>
            <Link   className='nav-item' to="/contact">Contact</Link>
            
          </li>
        
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;


