import React from "react";
import Helmet from "react-helmet";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

import "../styles/main.scss";

export default ({ children, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="author" href="/humans.txt" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:200,400,700"
        />
      </Helmet>
      <SiteHeader siteTitle={siteTitle} />
      <div className="content">{children()}</div>
      <SiteFooter />
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
