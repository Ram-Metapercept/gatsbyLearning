import React from "react"
import { Link,graphql,useStaticQuery } from 'gatsby';

function Footer() {
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
  let author=data.site.siteMetadata.author
  return (
    <footer>created by {author}&copy; 2023 </footer>
  )
}

export default Footer