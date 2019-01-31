export const StyledWrapper = ({ theme }) => ({
  background: theme.background,
  color: theme.foreground
});

export const Container = { width: "960px", margin: "0 auto" };

export const StyledLink = ({ theme }) => ({
  color: `${theme.link}`,
  fontWeight: "normal",
  textDecoration: "none",
  "&:hover": {
    color: `${theme.link}`,
    borderBottom: `3px solid ${theme.link}`
  }
});

export const StyledLI = ({ theme }) => ({
  display: "inline-block",
  marginRight: "7px",
  paddingRight: "7px",
  lineHeight: "1.25rem",
  borderRight: `1px solid ${theme.backgroundSubtle}`
});

export const StyledHeading = ({ theme }) => ({
  color: `${theme.foreground}`,
  fontWeight: "normal"
});

export const SmallStyledHeading = { ...StyledHeading, ...{ fontSize: "1rem" } };
