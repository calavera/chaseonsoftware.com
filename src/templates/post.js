import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <Layout location={location}>
      <Helmet
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article className="pad-container-w">
        <header className="container-m">
          <div className="meta">
            {post.frontmatter.tags && (
              <div>
                <span>in </span>
                <ul className="list-as-sentence">
                  {post.frontmatter.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}
            <span> on</span> <time>{post.frontmatter.date}</time>
          </div>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section>
          <div className="container-m">
            {post.frontmatter.description && (
              <h2 className="h2--subtitle">{post.frontmatter.description}</h2>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </article>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
