import React from "react";

export default () => (
  <footer>
    <div className="footer-inner">
      <p>
        <a href="/">chaseadams.io</a> is powered by GatsbyJS, GitLab & Netlify.
        <br />
      </p>
      <p>
        Read more about the topology in the <a href="/site-guide">Site Guide</a>
        .
      </p>
      <p>
        Find the source for
        <a href="https://gitlab.com/chaseadamsio/chaseadamsio.gitlab.io">
          {" "}
          chaseadams.io
        </a>{" "}
        on <a href="https://gitlab.com">Gitlab.</a>
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
);
