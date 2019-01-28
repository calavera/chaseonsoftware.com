// @flow
import React, { type Node } from "react";
import Link from "./link";
import PageContainer from "./pagecontainer";

type ListLinkProps = {
  to: string,
  children: Node
};

const ListLink = (props: ListLinkProps) => (
  <li style={{ display: `inline-block`, marginRight: "10px" }}>
    <Link activeClassName="active" exact={"true"} to={props.to}>
      {props.children}
    </Link>
  </li>
);

type SiteHeaderProps = {
  siteTitle: string
};

export default (props: SiteHeaderProps) => {
  const marginTop = props.isHomePage ? "2rem" : 0;
  const fontSizeH1 = props.isHomePage ? "2rem" : "1.5rem";
  return (
    <PageContainer>
      <header css={{ maxWidth: "50rem", margin: `${marginTop} auto 0` }}>
        <h1 css={{ marginBottom: ".5rem" }}>
          <span css={{ fontSize: fontSizeH1 }}>
            Hi, I'm <Link to="/">Chase Adams</Link>. I build software at
            Webflow.{" "}
          </span>
          <span
            css={{ display: "block", marginTop: ".5rem", fontSize: "1.25rem" }}
          >
            I write about building software, personal growth & individual
            productivity.
          </span>
        </h1>
        <nav>
          <ul css={{ margin: 0, padding: 0 }}>
            <ListLink to="/me/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </header>
    </PageContainer>
  );
};
