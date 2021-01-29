import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import IconCard from "../components/IconCard";

function About() {
  return (
    <div>
      <Container>

        <Row>
          <PageTitle>Contact</PageTitle>
        </Row>

        <Row>
          <ContactCard />
          <IconCard />
        </Row>

      </Container>
    </div>
  );
}

export default About;
