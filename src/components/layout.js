// @flow
import React, { type Node } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { ThemeProvider } from "emotion-theming";
import { colors } from "../utils/styled";

import SiteHeader from "./siteheader";
import SiteFooter from "./sitefooter";
import "../styles/prism.scss";

const theme = {
  colors
};

type LayoutData = {
  site: {
    siteMetadata: {
      title: string,
      description: string
    }
  }
};

export default ({ children, ...props }: { children: Node }) => {
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
      render={(data: LayoutData) => (
        <ThemeProvider theme={theme}>
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
                  href: "https://fonts.googleapis.com/css?family=Barlow:400,700"
                }
              ]}
            />

            <SiteHeader
              isHomePage={props.isHomePage}
              siteTitle={data.site.siteMetadata.title}
            />
            <div className="content">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      )}
    />
  );
};
