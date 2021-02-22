import React from "react";

import gitHubIcon from "../../images/icons/github.png";
import linkedInIcon from "../../images/icons/linkedin.png";
import stackOverflowIcon from "../../images/icons/stackoverflow.png";
import instagramIcon from "../../images/icons/instagram.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function IconCard() {
  return (
    <Col lg="9">
      <Card className="text-center p-3 mb-3">
        {/* Card Title */}
        <Row>
          <Col>
            <Card.Title as="h4">Find me online:</Card.Title>
          </Col>
        </Row>
        {/* Online Links */}
        <Row>
          {/* GitHub */}
          <Col xs="3">
            <a target="blank" href="//github.com/dandandanoneil">
              <Image thumbnail fluid src={gitHubIcon} alt="GitHub icon" className="w-100" style={{ maxWidth: 128 }} />
            </a>
          </Col>
          {/* LinkedIn */}
          <Col xs="3">
            <a target="blank" href="//www.linkedin.com/in/dhoneil/">
              <Image thumbnail fluid src={linkedInIcon} alt="LinkedIn icon" className="w-100" style={{ maxWidth: 128 }} />
            </a>
          </Col>
          {/* Stack Overflow */}
          <Col xs="3">
            <a target="blank" href="//stackoverflow.com/users/14072252/dan-oneil?tab=profile">
              <Image thumbnail fluid src={stackOverflowIcon} alt="Stack Overflow icon" className="w-100" style={{ maxWidth: 128 }} />
            </a>
          </Col>
          {/* Instagram */}
          <Col xs="3">
            <a target="blank" href="//www.instagram.com/dandandanoneil/">
              <Image thumbnail fluid src={instagramIcon} alt="Instagram icon" className="w-100" style={{ maxWidth: 128 }} />
            </a>
          </Col>
        </Row>
      </Card>
    </Col>
);
}

export default IconCard;
