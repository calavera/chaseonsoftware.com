import React from "react";
import Link from "gatsby-link";

const ListLink = props => (
  <li style={{ display: `inline` }}>
    <Link activeClassName="active" exact={true} to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default props => (
  <header className="nav group">
    <nav className="hr hr--bottom">
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
      <ul className="header-nav">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/me/">About</ListLink>
        {/* <ListLink to="/contact/">Contact</ListLink> */}
      </ul>
    </nav>
  </header>
);
