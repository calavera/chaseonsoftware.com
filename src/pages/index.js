import React from "react";
import Link from "gatsby-link";
import { notStrictEqual } from "assert";

export default ({ data }) => {
  let curYear = 0;
  return (
    <div className="small-container pad-container all-posts">
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.pageType === "articles")
        .map(({ node }) => (
          <div key={node.id}>
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
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
            date(formatString: "DD MMMM, YYYY")
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
