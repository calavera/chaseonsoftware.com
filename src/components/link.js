import React from "react";
import { default as GatsbyLink } from "gatsby-link";
import { withTheme } from "emotion-theming";

const styleLink = props => ({
  textDecoration: "none !important",
  color: `${props.theme.link} !important`,
  "&:hover": {
    borderBottom: `3px solid ${props.theme.link}`
  }
});

export const LinkExternal = withTheme(props => (
  <a css={styleLink(props)} {...props}>
    {props.children}
  </a>
));

const Link = props => <GatsbyLink css={styleLink(props)} {...props} />;
export default withTheme(Link);
