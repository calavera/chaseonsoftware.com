import React from "react";
export const colors = {
  black: "#282c34",
  blackSubtle: "#3e4451",
  white: "#fcf7ff",
  green: "#36f1cd",
  greenDark: "#0dbf9b"
};

export const StyledWrapper = {
  background: colors.black,
  color: colors.white
};

export const Tag = props => (
  <a
    href="#"
    css={{
      color: colors.green,
      display: "inline-block",
      background: colors.blackSubtle,
      textDecoration: "none",
      margin: "5px",
      padding: "5px",
      borderRadius: "5px",
      "&:hover": {
        background: colors.green,
        color: colors.black
      }
    }}
  >
    {props.children}
  </a>
);

export const Container = { width: "960px", margin: "0 auto" };

export const StyledLink = {
  color: `${colors.green}`,
  fontWeight: "normal",
  textDecoration: "none",
  "&:hover": {
    color: `${colors.green}`,
    borderBottom: `3px solid ${colors.green}`
  }
};

export const StyledLI = {
  display: "inline-block",
  marginRight: "7px",
  paddingRight: "7px",
  lineHeight: "1.25rem",
  borderRight: `1px solid ${colors.blackSubtle}`
};

export const StyledHeading = {
  color: `${colors.white}`,
  fontWeight: "normal"
};

export const SmallStyledHeading = { ...StyledHeading, ...{ fontSize: "1rem" } };
