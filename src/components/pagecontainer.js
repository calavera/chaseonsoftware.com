import React from "react";

const stylePageContainerWrapper = props => ({
  maxWidth: "50vw",
  margin: "0 auto",
  "@media (max-width: 960px)": {
    maxWidth: "95vw"
  }
});

export default props => (
  <div css={stylePageContainerWrapper}>{props.children}</div>
);
