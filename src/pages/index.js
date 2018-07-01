import React from "react";
import Layout from "../components/Layout";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <Layout>
      <div className="container pad-container all-posts">
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.pageType !== "pages")
          .filter(({ node }) => node.frontmatter.category !== "archive")
          .map(({ node }) => (
            <div className="post group" key={node.id}>
              <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
              {node.frontmatter.tags && (
                <div>
                  <span>in </span>
                  <ul className="list-as-sentence">
                    {node.frontmatter.tags.map((tag, idx) => (
                      <li key={idx}>{tag}</li>
                    ))}
                  </ul>
                </div>
              )}
              {node.frontmatter.description && (
                <div className="description">
                  {node.frontmatter.description}
                </div>
              )}
              <div className="post-meta">
                <div style={{ float: "left" }}>{node.frontmatter.date}</div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            tags
            category
          }
          fields {
            slug
            pageType
          }
          excerpt
        }
      }
    }
  }
`;
