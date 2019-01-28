// @flow
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { colors } from "../utils/styled";
import PageContainer from "../components/pagecontainer";

import Link from "../components/link";

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
    <Layout isHomePage>
      <PageContainer>
        <p css={{ marginTop: "5rem", fontSize: "1.5rem", fontWeight: "bold" }}>
          Articles
        </p>
        {data.allMdx.edges
          .filter(
            ({ node }: { node: EdgeNode }) =>
              node.frontmatter.category !== "archive"
          )
          .map(({ node }: { node: EdgeNode }) => (
            <div css={{ marginBottom: "2rem" }} key={node.id}>
              <div>
                <h1 css={{ fontSize: "1.5rem", marginBottom: 0 }}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h1>
                <div className="post-meta">
                  <time>{node.frontmatter.date}</time>
                </div>
                {node.frontmatter.description && (
                  <div>{node.frontmatter.description}</div>
                )}
              </div>
            </div>
          ))}
      </PageContainer>
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
