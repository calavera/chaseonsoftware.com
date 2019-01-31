// @flow
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import { Code } from "../components/code";
import { LinkExternal } from "../components/link";
import { MDXProvider } from "@mdx-js/tag";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { preToCodeBlock } from "mdx-utils";

import Header from "../components/autolinkheader";
import PageContainer from "../components/pagecontainer";
import { withTheme } from "emotion-theming";

const InlineCode = withTheme(props => (
  <code
    css={{
      background: props.theme.code,
      color: props.theme.foregroundSubtle,
      border: `1px solid ${props.theme.codeBorder}`
    }}
  >
    {props.children}
  </code>
));

const components = {
  h1: props => <Header is="h1" {...props} />,
  h2: props => <Header is="h2" {...props} />,
  a: props => <LinkExternal {...props} />,
  inlineCode: props => <InlineCode {...props} />,
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

      <PageContainer>
        <article>
          <header css={{ marginBottom: "2rem" }}>
            <h1 css={{ marginBottom: ".5rem" }}>{frontmatter.title}</h1>
            {frontmatter.updated && (
              <span>
                <strong>Updated:</strong> <time>{frontmatter.updated}</time>{" "}
              </span>
            )}
            <span>
              <strong>Published:</strong> <time>{frontmatter.date}</time>
            </span>
          </header>
          <section>
            <div>
              {frontmatter.description && <h2>{frontmatter.description}</h2>}
              <MDXProvider components={{ ...components }}>
                <MDXRenderer>{code.body}</MDXRenderer>
              </MDXProvider>
              <div>
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
              </div>
            </div>
          </section>
        </article>
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        updated(formatString: "YYYY-MM-DD")
        description
        tags
      }
    }
  }
`;
