import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function IndexPage({ data }) {
  const author = data.site.siteMetadata.author
  return (
    <div>
      <Layout>
        <h1>Hello</h1>
        <h2>I am {author}, a software developer living in Pune!</h2>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
