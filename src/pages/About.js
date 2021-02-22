import React from "react";
import PageTitle from "../components/PageTitle";
import StatsBox from "../components/StatsBox";
import Bio from "../components/Bio";

import Container from "react-bootstrap/Container";

function About() {
  return (
    <div>
      <Container>
        <PageTitle>About Me</PageTitle>
        <StatsBox />
        <Bio />
      </Container>
    </div>
  );
}

export default About;
