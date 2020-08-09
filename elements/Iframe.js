import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Iframe = ({ src = "", title = "" }) => {
  const iframeRef = React.useRef();

  return (
    <React.Fragment>
      <iframe
        ref={iframeRef}
        src={src}
        width="100%"
        height="100%"
        title={title}
        frameBorder="none"
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          right:0,

          display: () => (ready ? "none" : "block"),
        }}
      />
    </React.Fragment>
  );
};

Iframe.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Iframe;
