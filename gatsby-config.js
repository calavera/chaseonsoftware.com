module.exports = {
  siteMetadata: {
    title: `Chase Adams`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legacy`,
        path: `${__dirname}/src/content/legacy`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content/articles`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
};
