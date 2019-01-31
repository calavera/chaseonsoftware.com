// @flow
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { ThemeProvider } from "emotion-theming";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import SiteHeader from "./siteheader";
import SiteFooter from "./sitefooter";
import { lightTheme, darkTheme } from "../utils/colors";

library.add(faMoon, faCoffee, faTwitter, faGithub);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();

type LayoutData = {
  site: {
    siteMetadata: {
      title: string,
      description: string
    }
  }
};

const darkMode = "dark";
const lightMode = "light";

const isBrowser = () => typeof window !== "undefined";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.setTheme = this.setTheme.bind(this);
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    );

    this.state = {
      mode: lightMode,
      theme: lightTheme
    };
  }

  hydrateStateWithLocalStorage() {
    let mode = "light";
    if (isBrowser() && window.localStorage) {
      mode = window.localStorage.getItem("mode");
    }

    this.setState({
      mode,
      theme: mode === darkMode ? darkTheme : lightTheme
    });
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  setTheme() {
    const mode = this.state.mode === darkMode ? lightMode : darkMode;

    if (isBrowser() && window.localStorage) {
      window.localStorage.setItem("mode", mode);
    }

    this.setState({
      mode: mode,
      theme: mode === darkMode ? darkTheme : lightTheme
    });
  }

  render() {
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
          <ThemeProvider theme={this.state.theme}>
            <div
              css={{
                background: this.state.theme.background,
                color: this.state.theme.foreground
              }}
            >
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
                    href:
                      "https://fonts.googleapis.com/css?family=Barlow:400,700"
                  }
                ]}
              />

              <SiteHeader
                setTheme={this.setTheme}
                isHomePage={this.props.isHomePage}
                siteTitle={data.site.siteMetadata.title}
              />
              <div className="content">{this.props.children}</div>
              <SiteFooter />
            </div>
          </ThemeProvider>
        )}
      />
    );
  }
}

export default Layout;
