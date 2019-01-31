const path = require(`path`);
const mdxFeed = require(`gatsby-mdx/feed`);

const cfg = {
  siteMetadata: {
    title: `Chase Adams`,
    description: `Thoughts on Software Engineering, DevOps and Self-Management.`,
    siteUrl: `https://www.chaseadams.io`
  },
  plugins: [
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
        path: `${__dirname}/src/content/pages`
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
      resolve: `gatsby-mdx`,
      options: {
        // extensions: [".mdx", ".md"],
        defaultLayouts: {
          articles: { default: path.resolve(`./src/components/layout.js`) },
          pages: { default: path.resolve(`./src/components/layout.js`) }
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-flow`,
    `gatsby-source-instance-name-mdx`
  ]
};

if (process.env.CONTEXT === "production") {
  cfg.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-62564031-1"
    }
  });
} else if (process.env.CONTEXT === undefined) {
  cfg.plugins.push({
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/src/drafts`
    }
  });
}

module.exports = cfg;
