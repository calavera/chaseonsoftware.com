import React from "react";

const stylePageContainerWrapper = {
  maxWidth: "50rem",
  position: "relative",
  margin: "0 auto",
  "@media (max-width: 960px)": {
    maxWidth: "95vw"
  }
};

export default props => (
  <div css={{ ...stylePageContainerWrapper, ...props.css }}>
    {props.children}
  </div>
);
