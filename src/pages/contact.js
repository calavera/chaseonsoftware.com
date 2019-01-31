// @flow
import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { withTheme } from "emotion-theming";
import PageContainer from "../components/pagecontainer";
import { LinkExternal } from "../components/link";

const ContactInfo = props => (
  <div className="c-2-3">
    <h2>You can find me...</h2>{" "}
    <ul>
      <li>
        talking about software, distributed teams & work on{" "}
        <LinkExternal href="https://twitter.com/chaseadamsio">
          Twitter
        </LinkExternal>
        .
      </li>{" "}
      <li>
        building software on{" "}
        <LinkExternal href="https://gitlab.com/chaseadamsio">
          GitLab
        </LinkExternal>{" "}
        and{" "}
        <LinkExternal href="https://github.com/chaseadamsio">
          GitHub
        </LinkExternal>
        .
      </li>
      <li>
        also writing on{" "}
        <LinkExternal href="https://medium.com/chaseadamsio">
          Medium
        </LinkExternal>
        .
      </li>
      <li>
        professionally on{" "}
        <LinkExternal href="https://www.linkedin.com/in/chaseadams/">
          LinkedIn
        </LinkExternal>
        .
      </li>
    </ul>
  </div>
);

class ContactPage extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <Helmet title="Say Hi | Chase Adams" />
        <PageContainer>
          <article style={{ minHeight: "100vh" }}>
            <header className="container-m">
              <h1 className="container">Say Hi!</h1>
            </header>
            <div className="group container-l pad-h-container">
              <ContactInfo />
            </div>
          </article>
        </PageContainer>
      </Layout>
    );
  }
}

export default withTheme(ContactPage);
