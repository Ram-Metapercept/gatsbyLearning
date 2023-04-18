


const queries = [
  {
    query: `
      query {
        allMarkdownRemark {
          edges {
            node {
              objectID: id
              frontmatter {
                title
                description
                date
              }
              fields {
                slug
              }
              excerpt(format: PLAIN)
            }
          }
        }
        }
      }
    `,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => ({
        ...node.frontmatter,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        objectID: node.id,
      })),
  },
];

module.exports = queries;
