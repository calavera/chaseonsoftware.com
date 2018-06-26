import React from "react";
import Link from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import styles from "../styles/main.scss";

const ListLink = props => (
  <li style={{ display: `inline` }}>
    <OutboundLink to={props.to}>{props.children}</OutboundLink>
  </li>
);

export default props => (
  <header className="nav group">
    <nav>
      <Link to="/" style={{ float: `left` }}>
        <h1 style={{ display: "inline" }}>{props.siteTitle}</h1>
      </Link>
      <ul className="header-nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/me/">About</ListLink>
        {/* <ListLink to="/contact/">Contact</ListLink> */}
      </ul>
    </nav>
  </header>
);
