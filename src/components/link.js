import React from "react";
import { default as GatsbyLink } from "gatsby-link";
import { withTheme } from "emotion-theming";
import { colors } from "../utils/styled";

const styleLink = props => ({
  textDecoration: "none !important",
  color: `${colors.greenDark} !important`,
  "&:hover": {
    borderBottom: `3px solid ${colors.greenDark}`
  }
});

export const LinkExternal = props => (
  <a css={styleLink} {...props}>
    {props.children}
  </a>
);

const Link = props => <GatsbyLink css={styleLink} {...props} />;
export default withTheme(Link);
