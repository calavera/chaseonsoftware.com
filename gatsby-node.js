const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, createRedirect } = boundActionCreators;

  if (node.internal.type !== `MarkdownRemark`) {
    return;
  }

  const fileNode = getNode(node.parent);

  setPageType(node, fileNode.sourceInstanceName, createNodeField);
  let slug = "";

  if (node.frontmatter.slug !== undefined) {
    slug = node.frontmatter.slug;
  } else {
    slug = createFilePath({ node, getNode, basePath: `pages` });
  }
  createNodeField({
    node,
    name: `slug`,
    value: slug
  });

  if (node.frontmatter.aliases !== undefined) {
    node.frontmatter.aliases.forEach((alias) => {
      createRedirect({
        fromPath: alias,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: slug,
      });
    })
  }
};

const setPageType = (node, pageType, createNodeField) => {
  createNodeField({
    node,
    name: `pageType`,
    value: pageType || "none"
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug
            }
          });
        });
        resolve();
      });
  });
};
