import React from "react";

function Container(props) {
  return <div className="container mt-3" style={props.style}>{props.children}</div>;
}

export default Container;
