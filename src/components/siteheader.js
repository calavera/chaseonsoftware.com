// @flow
import React, { type Node } from "react";
import { withTheme } from "emotion-theming";
import Link from "./link";
import PageContainer from "./pagecontainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const navLinkStyle = props => ({
  border: "none",
  margin: "0 .25rem",
  padding: ".5rem",
  color: props.theme.foregroundSubtle,
  background: "none",
  display: "block",

  cursor: "pointer",
  "&:hover": {
    background: props.theme.backgroundSubtle
  },
  "&:focus": {
    outline: "none"
  }
});

const NavLinkButton = withTheme(props => (
  <button onClick={() => props.onClick()} css={navLinkStyle(props)}>
    {props.children}
  </button>
));

const NavLink = withTheme(props => (
  <a href={props.href} css={navLinkStyle(props)}>
    {props.children}
  </a>
));

const SiteHeader = (props: SiteHeaderProps) => {
  const marginTop = props.isHomePage ? "4rem" : "3rem";
  const fontSizeH1 = props.isHomePage ? "2rem" : "1.5rem";
  return (
    <PageContainer>
      <div
        css={{
          position: "absolute",
          right: 0
        }}
      >
        <ul css={{ listStyle: "none", display: "flex" }}>
          <li>
            <NavLinkButton onClick={props.setTheme} {...props}>
              <FontAwesomeIcon icon={props.theme.icon} />
            </NavLinkButton>
          </li>
          <li>
            {" "}
            <NavLink as="a" href="https://github.com/chaseadamsio">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink as="a" href="https://twitter.com/chaseadamsio">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </NavLink>
          </li>
        </ul>
      </div>
      <header
        css={{
          color: props.theme.foreground,
          maxWidth: "50rem",
          padding: `${marginTop} 0`
        }}
      >
        <h1 css={{ marginBottom: ".5rem", fontWeight: "normal" }}>
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

export default withTheme(SiteHeader);
