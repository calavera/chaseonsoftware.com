// @flow
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageContainer from "../components/pagecontainer";

import Link from "../components/link";

type EdgeNode = {
  id: string,
  frontmatter: {
    title: string,
    description: string,
    date: Date,
    category: string,
    tags: Array<string>
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
        {data.allMdx.edges.map(({ node }) => (
          <div
            css={{
              paddingBottom: "1rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
            key={node.id}
          >
            <h1
              css={{
                fontSize: "1.15rem",
                fontWeight: "normal",
                marginBottom: 0
              }}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h1>
            <div
              css={{
                minWidth: "100px"
              }}
            >
              <time>{node.frontmatter.date}</time>
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
      filter: {
        fields: { sourceInstanceName: { ne: "pages" } }
        frontmatter: { category: { ne: "archive" } }
      }
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
            date(formatString: "YYYY-MM-DD")
            tags
            category
          }
          excerpt
        }
      }
    }
  }
`;
