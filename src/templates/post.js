// @flow
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled, { css } from "react-emotion";

import { Code } from "../components/code";
import { MDXProvider } from "@mdx-js/tag";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { preToCodeBlock } from "mdx-utils";

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  }
};

const PostMeta = styled("div")`
  margin-top: 1rem;
  padding: 1rem;
  background: #eee;
  border: 1px solid #ccc;
`;

type PostData = {
  mdx: {
    frontmatter: {
      title: string,
      description: string,
      tags: Array<string>,
      date: Date
    },
    html: string
  }
};

export default ({ data: { mdx } }: PostData) => {
  const { frontmatter, code } = mdx;
  return (
    <Layout>
      <Helmet
        title={frontmatter.title}
        meta={[
          {
            name: "description",
            content: frontmatter.description
          }
        ]}
      />
      <div
        className={css`
          background-color: #212130;
          height: 350px;
          @media (max-width: 1025px) {
            height: 270px;
          }
        `}
      />
      <article
        className={css`
          width: 65vw;
          margin: -250px auto 50px auto;
          background-color: #fff;
          border: 1px solid #eee;
          @media (max-width: 1025px) {
            width: 95vw;
          }
        `}
      >
        <header className="container-m">
          <h1>{frontmatter.title}</h1>
        </header>
        <section>
          <div className="container-m">
            {frontmatter.description && (
              <h2 className="h2--subtitle">{frontmatter.description}</h2>
            )}
            <MDXProvider components={{ ...components }}>
              <MDXRenderer>{code.body}</MDXRenderer>
            </MDXProvider>
            <PostMeta>
              {frontmatter.tags && (
                <div>
                  <span>Topics: </span>
                  <ul className="list-as-sentence">
                    {frontmatter.tags.map((tag, idx) => (
                      <li key={idx}>{tag}</li>
                    ))}
                  </ul>
                </div>
              )}
              <span>Date:</span> <time>{frontmatter.date}</time>
            </PostMeta>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
