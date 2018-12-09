// @flow
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Link from "gatsby-link";

type EdgeNode = {
  id: string,
  fields: {
    pageType: string,
    slug: string
  },
  frontmatter: {
    title: string,
    description: string,
    category: string,
    date: Date
  }
};
type IndexData = {
  allMarkdownRemark: {
    edges: $ReadOnlyArray<{ node: EdgeNode }>
  }
};

export default ({ data }: { data: IndexData }) => {
  return (
    <Layout>
      <div className="container pad-container all-posts">
        {data.allMarkdownRemark.edges
          .filter(
            ({ node }: { node: EdgeNode }) => node.fields.pageType !== "pages"
          )
          .filter(
            ({ node }: { node: EdgeNode }) =>
              node.frontmatter.category !== "archive"
          )
          .map(({ node }: { node: EdgeNode }) => (
            <div className="post group" key={node.id}>
              <h1>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h1>
              <div className="post-meta">
                <div>{node.frontmatter.date}</div>
              </div>
              {node.frontmatter.description && (
                <div className="description">
                  {node.frontmatter.description}
                </div>
              )}
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
            date(formatString: "YYYY/MM/DD")
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
