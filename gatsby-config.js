module.exports = {
  siteMetadata: {
    title: `Chase Adams`,
    description: `Helping others build better web apps and web sites.`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quick-tip`,
        path: `${__dirname}/src/content/quicktip`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`
  ]
};
