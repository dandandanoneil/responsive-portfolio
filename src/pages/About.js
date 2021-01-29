import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import PageTitle from "../components/PageTitle";
import StatsBox from "../components/StatsBox";
import Bio from "../components/Bio";

function About() {
  return (
    <div>
      <Container>

        <Row>
          <PageTitle>About Me</PageTitle>
        </Row>

        <Row>
          <StatsBox />
        </Row>

        <Row>
          <Bio />
        </Row>

      </Container>
    </div>
  );
}

export default About;
