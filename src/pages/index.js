import React from "react";
import Link from "gatsby-link";
import { notStrictEqual } from "assert";

export default ({ data }) => {
  let curYear = 0;
  return (
    <div className="container pad-container all-posts">
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.pageType !== "pages")
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
              <div className="description">{node.frontmatter.description}</div>
            )}
            <div className="post-meta">
              <div style={{ float: "left" }}>{node.frontmatter.date}</div>
            </div>
          </div>
        ))}
    </div>
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
