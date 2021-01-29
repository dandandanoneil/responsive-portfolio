import React from "react";

function PageTitle(props) {
  return (
    <header className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <h1>
        {props.children}
      </h1>
    </header>
  );
}

export default PageTitle;