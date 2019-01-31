import React from "react";
import { css } from "emotion";
import GHSlugger from "github-slugger";

const slugger = new GHSlugger();

// The following styles were borrowed from GitHub's anchor hover
const linkWrapperStyle = css({
  fontWeight: "normal",
  "&:hover svg": {
    visibility: "visible"
  }
});

const linkStyle = css({
  float: "left",
  lineHeight: 1,
  marginLeft: "-20px",
  paddingRight: "4px"
});

const svgStyle = css({
  visibility: "hidden"
});

const AutoLinkHeader = ({ level, ...props }) => {
  const Heading = `h${level}`;
  const slug = slugger.slug(props.children);
  return (
    <div>
      <Heading id={slug} css={linkWrapperStyle}>
        <a href={`#${slug}`} css={linkStyle}>
          <svg
            aria-hidden="true"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
            css={svgStyle}
          >
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            />
          </svg>
        </a>{" "}
        <span>{props.children}</span>
      </Heading>
    </div>
  );
};

AutoLinkHeader.defaultProps = { is: "h2" };

export default AutoLinkHeader;
