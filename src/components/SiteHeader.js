import React from "react";
import Link from "gatsby-link";

import styles from "../styles/main.scss";

const ListLink = props => (
  <li style={{ display: `inline` }}>
    <Link activeClassName="active" exact={true} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default props => (
  <header className="nav group">
    <nav>
      <Link to="/">
        <h1>{props.siteTitle}</h1>
      </Link>
      <ul className="header-nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/me/">About</ListLink>
        {/* <ListLink to="/contact/">Contact</ListLink> */}
      </ul>
    </nav>
  </header>
);
