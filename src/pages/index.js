import * as React from "react"
import { Link, graphql } from "gatsby"
import AlgoliaSearch from "../components/Search"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {

  // }

  return (
    <>
     <Layout location={location} >

      <AlgoliaSearch/>
     
    </Layout>
    </>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/




// // import * as React from "react"
// // import { Link, graphql } from "gatsby"
// // import AlgoliaSearch from "../components/Search"
// // import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

// // import Bio from "../components/bio"
// // import Layout from "../components/layout"
// // import Seo from "../components/seo"

// // const BlogIndex = ({ data, location }) => {
// //   const siteTitle = data.site.siteMetadata?.title || `Title`
// //   const posts = data.allMarkdownRemark.nodes

// //   if (posts.length === 0) {
// //     return (
// //       <Layout location={location} title={siteTitle}>
// //         <Bio />
// //         <p>
// //           No blog posts found. Add markdown posts to "content/blog" (or the
// //           directory you specified for the "gatsby-source-filesystem" plugin in
// //           gatsby-config.js).
// //         </p>
// //       </Layout>
// //     )
// //   }

// //   return (
// //     <InstantSearch
// //       appId="S2KLHJSUYP"
// //       apiKey="01732baee44cb401944822d5371aa2f6"
// //       indexName="Blog"
// //     >
// //       <Layout location={location} title={siteTitle}>
// //         <Bio />
// //         <SearchBox />
// //         <Hits hitComponent={Hit} />
// //         <ol style={{ listStyle: `none` }}>
// //           {posts.map(post => {
// //             const title = post.frontmatter.title || post.fields.slug

// //             return (
// //               <li key={post.fields.slug}>
// //                 <article
// //                   className="post-list-item"
// //                   itemScope
// //                   itemType="http://schema.org/Article"
// //                 >
// //                   <header>
// //                     <h2>
// //                       <Link to={post.fields.slug} itemProp="url">
// //                         <span itemProp="headline">{title}</span>
// //                       </Link>
// //                     </h2>
// //                     <small>{post.frontmatter.date}</small>
// //                   </header>
// //                   <section>
// //                     <p
// //                       dangerouslySetInnerHTML={{
// //                         __html: post.frontmatter.description || post.excerpt,
// //                       }}
// //                       itemProp="description"
// //                     />
// //                   </section>
// //                 </article>
// //               </li>
// //             )
// //           })}
// //         </ol>
// //       </Layout>
// //     </InstantSearch>
// //   )
// // }

// // const Hit = ({ hit }) => (
// //   <article
// //     className="post-list-item"
// //     itemScope
// //     itemType="http://schema.org/Article"
// //   >
// //     <header>
// //       <h2>
// //         <Link to={hit.fields.slug} itemProp="url">
// //           <span itemProp="headline">{hit.frontmatter.title}</span>
// //         </Link>
// //       </h2>
// //       <small>{hit.frontmatter.date}</small>
// //     </header>
// //     <section>
// //       <p>{hit.excerpt}</p>
// //     </section>
// //   </article>
// // );

// // export default BlogIndex

// // /**
// //  * Head export to define metadata for the page
// //  *
// //  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
// //  */
// // export const Head = () => <Seo title="All posts" />

// // export const pageQuery = graphql`
// //   {
// //     site {
// //       siteMetadata {
// //         title
// //       }
// //     }
// //     allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
// //       nodes {
// //         excerpt
// //         fields {
// //           slug
// //         }
// //         frontmatter {
// //           date(formatString: "MMMM DD, YYYY")
// //           title
// //           description
// //         }
// //       }
// //     }
// //   }
// // `


// // import React from "react"
// // import { graphql } from "gatsby"
// // import algoliasearch from "algoliasearch/lite"
// // import {
// //   InstantSearch,
// //   SearchBox,
// //   Hits,
// //   Highlight,
// // } from "react-instantsearch-dom"

// // import Bio from "../components/bio"
// // import Layout from "../components/layout"
// // import SEO from "../components/seo"
// // import PostPreview from "../components/PostPreview"

// // const searchClient = algoliasearch(
// //   "B9BSF8B0EG",
// //   "63c3cdc9d25f4a6ed27a276939ecaa69"
// // )

// // class BlogIndex extends React.Component {
// //   render() {
// //     const { data } = this.props
// //     const siteTitle = data.site.siteMetadata.title

// //     return (
// //       <Layout location={this.props.location} title={siteTitle}>
// //         <SEO
// //           title="All posts"
// //           keywords={[`blog`, `gatsby`, `javascript`, `react`]}
// //         />
// //         <Bio />
// //         <InstantSearch searchClient={searchClient} indexName="Blog">
// //           <SearchBox />
// //           <Hits hitComponent={PostPreview} />
// //         </InstantSearch>
// //       </Layout>
// //     )
// //   }
// // }

// // export default BlogIndex

// // export const pageQuery = graphql`
// //   query {
// //     site {
// //       siteMetadata {
// //         title
// //       }
// //     }
// //     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// //       edges {
// //         node {
// //           excerpt
// //           fields {
// //             slug
// //           }
// //           frontmatter {
// //             date(formatString: "MMMM DD, YYYY")
// //             title
// //             description
// //           }
// //         }
// //       }
// //     }
// //   }
// // `



// import React, { useState } from "react";
// import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
// import algoliasearch from "algoliasearch/lite";

// function CustomHitsComponent({ hit }) {
//   return (
//     <div>
//       <h2>{hit.title}</h2>
//       <p>{hit.description}</p>
//       <p>{hit.author}</p>
//     </div>
//   );
// }

// const AlgoliaSearch = () => {
//   const [query, setQuery] = useState("");

//   const searchClient = algoliasearch(
//     "S2KLHJSUYP",
//     "01732baee44cb401944822d5371aa2f6"
//   );

//   return (
//     <InstantSearch searchClient={searchClient} indexName="Blog">
//       <SearchBox
//         onChange={(event) => setQuery(event.currentTarget.value)}
//         value={query}
//         placeholder="Search posts..."
//       />
//       <Hits hitComponent={CustomHitsComponent} />
//     </InstantSearch>
//   );
// };




// import { Link, graphql } from "gatsby";


// import Bio from "../components/bio";
// import Layout from "../components/layout";
// import Seo from "../components/seo";

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`;
//   const posts = data.allMarkdownRemark.nodes;

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//         <AlgoliaSearch />
//       </Layout>
//     );
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Bio />
//       <AlgoliaSearch />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug;

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           );
//         })}
//       </ol>
//     </Layout>
//   );
// };

// export default BlogIndex;

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="All posts" />;

// export const pageQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// }
// }

// `
