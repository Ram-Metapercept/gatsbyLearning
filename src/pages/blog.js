import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from "gatsby"

function BlogPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
        <p>Posts will show up here later on</p>
      </Layout>
    </>
  )
}

export default BlogPage
