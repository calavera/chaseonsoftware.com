const cfg = {
  siteMetadata: {
    title: `chaseadams.io`,
    description: `Thoughts on Software Engineering, DevOps and Self-Management.`,
    siteUrl: `https://www.chaseadams.io`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.chaseadams.io`
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
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-feed`
  ]
};

if (process.env.CONTEXT === "production") {
  cfg.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-62564031-1"
    }
  });
} else if (process.env.CONTEXT !== "production") {
  cfg.plugins.push({
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/content/drafts`
    }
  });
}

module.exports = cfg;
