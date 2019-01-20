// @flow
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Link from "gatsby-link";

type EdgeNode = {
  id: string,
  frontmatter: {
    title: string,
    description: string,
    date: Date,
    category: string
  },
  fields: {
    slug: string,
    sourceInstanceName: string
  }
};
type IndexData = {
  allMdx: {
    edges: $ReadOnlyArray<{ node: EdgeNode }>
  }
};

export default ({ data }: { data: IndexData }) => {
  return (
    <Layout>
      <div className="container pad-container all-posts">
        {data.allMdx.edges
          .filter(
            ({ node }: { node: EdgeNode }) =>
              node.frontmatter.category !== "archive"
          )
          .map(({ node }: { node: EdgeNode }) => (
            <div className="post group" key={node.id}>
              <div>
                <h1>
                  <Link
                    css={{
                      color: "#666 !important"
                    }}
                    to={node.fields.slug}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h1>
                <div className="post-meta">
                  <time>{node.frontmatter.date}</time>
                </div>
                {node.frontmatter.description && (
                  <div className="description">
                    {node.frontmatter.description}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMdx(
      filter: { fields: { sourceInstanceName: { ne: "pages" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            sourceInstanceName
          }
          frontmatter {
            title
            description
            date(formatString: "YYYY.MM.DD")
            tags
            category
          }
          excerpt
        }
      }
    }
  }
`;
