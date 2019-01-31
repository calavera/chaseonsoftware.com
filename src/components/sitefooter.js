import React from "react";
import PageContainer from "./pagecontainer";
import Link, { LinkExternal } from "../components/link";

export default () => (
  <PageContainer>
    <footer
      css={{
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
        padding: "1rem 0"
      }}
    >
      <div className="footer-inner">
        <div>
          <Link to="/">chaseonsoftware.com</Link> is powered by GatsbyJS, GitHub &
          Netlify.
          <br />
        </div>
        <div>
          Find the source for
          <LinkExternal href="https://github.com/chaseadamsio/chaseonsoftware.com">
            {" "}
            chaseonsoftware.com
          </LinkExternal>{" "}
          on GitHub.
        </div>
        <div>
          <Link to="/contact/">
            <span role="img" aria-label="waving">
              👋
            </span>{" "}
            Say Hi!
          </Link>
        </div>
      </div>
    </footer>
  </PageContainer>
);
