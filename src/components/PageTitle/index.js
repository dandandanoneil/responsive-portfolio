import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PageTitle(props) {
  return (
    <Row>
      <Col lg="9">
        <h1>
          {props.children}
        </h1>
      </Col>
    </Row>
  );
}

export default PageTitle;