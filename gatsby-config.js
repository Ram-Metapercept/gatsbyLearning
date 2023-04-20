/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  
  siteMetadata:{
    title:"GatsBy Bootcamp !",
    author:"Ram",
    description:"this is gatsby project"

  },





  plugins: ["gatsby-plugin-sass",
  `gatsby-transformer-remark`,
  `gatsby-transformer-remark`,
  'gatsby-transformer-sharp',
 
  
  {
    resolve:"gatsby-source-filesystem",
    options:{
      name:"src",
      path:`${__dirname}/src/`

    },
    

  }
 
]
}
