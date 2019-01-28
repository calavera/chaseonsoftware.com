import React from "react";
import PageContainer from "./pagecontainer";

export default () => (
  <PageContainer>
    <footer
      css={{
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
        paddingTop: "2rem"
      }}
    >
      <div className="footer-inner">
        <p>
          <a href="/">chaseadams.io</a> is powered by GatsbyJS, Github &
          Netlify.
          <br />
        </p>
        <p>
          Read more about the topology in the{" "}
          <a href="/site-guide">Site Guide</a>.
        </p>
        <p>
          Find the source for
          <a href="https://github.com/chaseadamsio/chaseadams.io">
            {" "}
            chaseadams.io
          </a>{" "}
          on <a href="https://github.com">GitHub.</a>
        </p>
        <p>
          <a href="/contact/">
            <span role="img" aria-label="waving">
              👋
            </span>{" "}
            Say Hi!
          </a>
        </p>
      </div>
    </footer>
  </PageContainer>
);
