import React from "react";

function Container(props) {
  return <div className="container container-fluid mt-5" style={props.style}>{props.children}</div>;
}

export default Container;