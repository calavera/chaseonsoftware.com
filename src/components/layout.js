import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import SiteHeader from "./siteheader";
import SiteFooter from "./sitefooter";

import "../styles/main.scss";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HomepageQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet
            title={`${data.site.siteMetadata.title} | ${
              data.site.siteMetadata.description
            }`}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description
              }
            ]}
            link={[
              {
                rel: "author",
                href: "/humans.txt"
              },
              {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto:400,700"
              }
            ]}
          />
          <SiteHeader siteTitle={data.site.siteMetadata.title} />
          <div className="content">{children}</div>
          <SiteFooter />
        </div>
      )}
    />
  );
};
