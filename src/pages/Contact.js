import React from "react";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import IconCard from "../components/IconCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <div>
      <Container>
        <PageTitle>Contact</PageTitle>
        <Row>
          <ContactCard />
          <IconCard />
        </Row>
      </Container>
    </div>
  );
}

export default About;
