// @flow
import React, { type Node } from "react";
import Link from "gatsby-link";

type ListLinkProps = {
  to: string,
  children: Node
};

const ListLink = (props: ListLinkProps) => (
  <li style={{ display: `inline` }}>
    <Link activeClassName="active" exact={"true"} to={props.to}>
      {props.children}
    </Link>
  </li>
);

type SiteHeaderProps = {
  siteTitle: string
};

export default (props: SiteHeaderProps) => (
  <header className="nav group">
    <nav>
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
      <ul className="header-nav">
        <ListLink to="/me/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>
  </header>
);
