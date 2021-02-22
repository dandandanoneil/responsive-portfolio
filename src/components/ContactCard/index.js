import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ContactCard() {
  return (
    <Col lg="9">
      <Card className="text-center p-3 mb-3">
        {/* Name/Title */}
        <Col>
          <h2>Dan O'Neil</h2>
          <h4><i>Full Stack Web Developer</i></h4>
        </Col>
        {/* Phone */}
        <Col>
          <a target="blank" href="tel:440.708.3326">
            <h4>(440) 708-3326</h4>
          </a>
        </Col>
        {/* Email */}
        <Col>
          <a target="blank" href="mailto:dhoneil@gmail.com">
            <h4>dhoneil@gmail.com</h4>
          </a>
        </Col>
      </Card>
    </Col>
);
}

export default ContactCard;
