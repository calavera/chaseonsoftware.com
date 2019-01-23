const path = require(`path`);
const slugify = require(`slugify`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  code {
                    scope
                  }
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                  parent {
                    ... on File {
                      name
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const { frontmatter, parent, fields } = node;
          createPage({
            path: fields.slug,
            component: require.resolve("./src/templates/post.js"),
            context: { slug: fields.slug }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, createRedirect } = actions;

  if (node.internal.type === `Mdx`) {
    const { frontmatter } = node;

    const slug =
      frontmatter.url ||
      `${frontmatter.slug ||
        createFilePath({ node, getNode, basePath: "pages" })}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug
    });

    if (frontmatter && frontmatter.aliases !== undefined) {
      frontmatter.aliases.forEach(alias => {
        createRedirect({
          fromPath: alias,
          isPermanent: true,
          redirectInBrowser: true,
          toPath: slug
        });
      });
    }
  }
};
