import React from "react";
import Helmet from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <article>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        {post.frontmatter.description && (
          <meta name="description" content={post.frontmatter.description} />
        )}
      </Helmet>
      <header className="single-header">
        <div className="container">
          <h1>{post.frontmatter.title}</h1>
          <div className="meta">
            <time>{post.frontmatter.date}</time>
          </div>
        </div>
      </header>
      <section className="pad-container-w">
        <div className="container">
          {post.frontmatter.description && (
            <h2 className="h2--subtitle">{post.frontmatter.description}</h2>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
    </article>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
